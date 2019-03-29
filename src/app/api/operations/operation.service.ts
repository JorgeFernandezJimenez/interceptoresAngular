import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Operation } from './operation';
import { environment } from '../../../environments/environment';

@Injectable()
export class OperationService {

  private url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = environment.apiUrl + 'operations/';
  }

  public getOperations(): Observable<Operation[]> {
    return this.http.get<Operation[]>(this.url);
  }

}
