import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Data } from './model/data';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private messageSource = new BehaviorSubject<Data>(new Data);
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: Data) {
    this.messageSource.next(message);
  }
  constructor() { }
}
