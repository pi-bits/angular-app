import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PersistenceService } from 'src/app/persistence.service';

@Injectable({
  providedIn: 'root'
})
export class RouterResolverService  implements Resolve<any> {



  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return Observable.of('Hello Alligator!').delay(2000);this.persistenceservice.getAll();
  }


  constructor(private persistenceservice:PersistenceService) {
    
   }
}
