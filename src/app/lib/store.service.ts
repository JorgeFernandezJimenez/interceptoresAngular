import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  // Estado del usuario: token, si es anónimo y un mensaje
  private state = {
    token: '',
    anonymous: true,
    message: ''
  }

  // Puente, que permite realizar cambios, del token para poder subscribirse a sus cambios
  private token$: Subject<string>;

  // Puente, que permite realizar cambios, del token para poder subscribirse a sus cambios
  // y guarda el estado anterior
  private anonymous$: BehaviorSubject<boolean>;

  // Puente, que permite realizar cambios, del token para poder subscribirse a sus cambios
  private message$: Subject<string>;

  // En el constructor, inicializamos los Puentes
  constructor() {
    this.token$ = new Subject<string>();
    this.anonymous$ = new BehaviorSubject<boolean>(
      this.state.anonymous
    );
    this.message$ = new Subject<string>();
  }

  // Conseguir el Puente del token como observable para evitar manipulaciones
  public getToken$(): Observable<string> {
    return this.token$.asObservable();
  }

  // Conseguir el Puente del anonymous como observable para evitar manipulaciones
  public getAnonymous$(): Observable<boolean> {
    return this.anonymous$.asObservable();
  }

  // Conseguir el Puente del message como observable para evitar manipulaciones
  public getMessage$(): Observable<string> {
    return this.message$.asObservable();
  }

  // Al recibir el token, comprueba si llega vacío y, en caso de que no llegue vacío,
  // cambia el estado del usuario.
  // Finalmente, cambia los estados de los Puentes para que sus subscriptores reaccionen
  // a ese cambio
  public emitToken(token: string) {
    if(token) {
      this.state.token = token;
      this.state.anonymous = false;
    }else {
      this.state.token = '';
      this.state.anonymous = true;
    }
    this.token$.next(this.state.token);
    this.anonymous$.next(this.state.anonymous);
  }

  // Recibe el message y lo guarda en el estado del usuario. Posteriormente, realiza un cambio en el
  // Puente para indicárselo a sus subscriptores.
  public emitMessage(message: string) {
    this.state.message = message;
    this.message$.next(this.state.message);
  }

}
