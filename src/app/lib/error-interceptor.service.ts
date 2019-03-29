import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { StoreService } from './store.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {

  // Declaración de StoreService y Router privadas para uso de la clase
  constructor(
    private _storeService: StoreService,
    private router: Router
  ) { }
  
  // Método principal de los interceptores. Comprueba si hay error y lo manda a otro método
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const handledRequest = next.handle(req).pipe(tap<HttpEvent<any>>(null, error => {
      if(error instanceof HttpErrorResponse) {
        this.errorResponse(error);
      }else {
        console.log(error);
      }
    }));
    return handledRequest;
  }

  // Comprueba si el error es de autenticación para enviarlo al login
  private errorResponse(error: HttpErrorResponse) {
    if(error.status == 401) {
      this._storeService.emitMessage('No autorizado');
      this.redirectToLogin();
    }else {
      console.log(error.statusText);
    }
  }

  // Redirección al login
  private redirectToLogin() {
    this.router.navigateByUrl('/credentials/login');
  }

}
