import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterResolverService  implements Resolve<any> {

  constructor(){}}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
  }


  constructor() { }
}
