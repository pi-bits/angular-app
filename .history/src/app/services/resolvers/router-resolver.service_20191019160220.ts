import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterResolverService  implements Resolve<any> {

  constructor() { }
}
