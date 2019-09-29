import { Injectable } from '@angular/core';
import { ApplicationData } from '../model/applicationData';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CaseSearchService {
  private apiRoot = 'http://localhost:3000/application'


  constructor(private httpClient: HttpClient) {

  }

  search(caseId: string): Observable<ApplicationData> {
    let apiURL = `${this.apiRoot}?caseId=${caseId}`;
    return this.httpClient.get(apiURL,  { observe: 'response', responseType: 'json' }).pipe(
      map((response: HttpResponse<ApplicationData>) => {
        if (response.status === 200) {
          return response.body;
        }
        else {
          return new ApplicationData();
        }

      }),
      catchError((error) => {
        switch (error.status) {
          case 401:
            console.log('Uauthorized Login')
            break;
          case 403:
            console.log('Forbidden')
            break;
        }
        return throwError(error);
      })

    );

  }
}
