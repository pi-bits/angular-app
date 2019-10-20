import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PersistenceService } from 'src/app/persistence.service';

@Injectable({
  providedIn: 'root'
})
export class RouterResolverService  implements Resolve<any> {



  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.persistenceservice.
  }


  constructor(persistenceservice:PersistenceService) {
    
   }
}
