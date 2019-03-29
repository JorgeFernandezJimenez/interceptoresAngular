import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class CredentialsService {

  private url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = environment.apiUrl + "pub/credentials/";
  }

  public login(datos: any): Observable<any> {
    return this.http.post(this.url + 'login', datos);
  }

  public register(datos: any): Observable<any> {
    return this.http.post(this.url + 'registration', datos);
  }

}
