import { Injectable } from '@angular/core';
import { ApplicationData } from '../model/applicationData';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CaseSearchService {
  private apiRoot = 'http://localhost:3000/application'


  constructor(private httpClient: HttpClient) {

  }

  search(caseId: string): Observable<ApplicationData> {
    let apiURL = `${this.apiRoot}?caseId=${caseId}`;
    return this.httpClient.get(apiURL).pipe(
      map((result:ApplicationData) => {
        console.log(result);
        return result;
      })
    );

  }
}
