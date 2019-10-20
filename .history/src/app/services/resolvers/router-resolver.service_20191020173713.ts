import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PersistenceService } from 'src/app/persistence.service';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouterResolverService  implements Resolve<Observable<any>> {



  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return of(this.persistenceservice.getAll()).pipe(tap(data =>{
      
    }),delay(2000));
  }


  constructor(private persistenceservice:PersistenceService) {
    
   }
}
