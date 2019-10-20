import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  url = 'http://localhost:3000/application/1';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
   return this.http.get(this.url);
  }
}
