import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PersistenceService } from 'src/app/persistence.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouterResolverService  implements Resolve<Observable<any>> {



  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return of(this.persistenceservice.getAll()).pipe(del);
  }


  constructor(private persistenceservice:PersistenceService) {
    
   }
}
