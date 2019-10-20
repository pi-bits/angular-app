import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  url = 'http://localhost:3000/application';

  constructor(private http: HttpClient) { }

  getAll() {
    this.http.get(this.url).subscribe((data) => {
      console.log(data);
      return data;
    });
    this.http.get(this.url).subscribe((data) => {
      console.log(data);
      return data;
    });
  }
}
