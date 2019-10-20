import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  url = 'http://localhost:3000/application';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
   return this.http.get(this.url);
    // const postData = {
    //   "id": 3,
    //   "age": 16,
    //   "name": "Andy"
    // }
    // this.http.post(this.url,postData).subscribe((data) => {
    //   // console.log(data);
    //   return data;
    // });
  }
}
