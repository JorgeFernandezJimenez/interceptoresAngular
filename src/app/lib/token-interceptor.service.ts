import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoreService } from './store.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  // Variable privada para almacenar el token que se va a enviar
  private token: string;

  // Declarar el storeService y llamada a la función subscribeToToken
  constructor(
    private _storeService: StoreService
  ) {
    this.token = '';
    this.subscribeToToken();
  }

  // Subscribirse al Observable del token del StoreService para almacenar los cambios
  private subscribeToToken() {
    this._storeService.getToken$().subscribe(
      response => {
        this.token = response;
      },
      err => {
        console.log(err);
      }
    )
  }

  // Función del Intercept, recibe el request (petición) y un manejador (next), y devuelve un Observable
  // de un evento HTTP. En cada petición, llama a la función setAuth para cambiar las cabeceras
  // y devuelve el observable.
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authorizationReq = this.setAuth(req);
    const handledRequest = next.handle(authorizationReq);
    return handledRequest;
  }

  // Recibe una petición (request), en una variable guardas la cabecera de authorization
  // En una variable guarda las cabeceras cambiadas.
  // En otra constante, guarda un clon de la petición (ya que no se pueden cambiar las cabeceras de un 
  // request sin clonarlo) y lo devuelve
  private setAuth(req: HttpRequest<any>): HttpRequest<any> {
    const authToken = `Bearer ${this.token}`;
    const headers = req.headers.set('Authorization', authToken);
    const authorizedReq = req.clone({ headers });
    return authorizedReq;
  }

}
