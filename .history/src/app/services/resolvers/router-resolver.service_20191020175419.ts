import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PersistenceService } from 'src/app/persistence.service';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouterResolverService  implements Resolve<Observable<any>> {



  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    var data = this.persistenceservice.getAll().subscribe((data)=>{
      console.log(data);
    });

    debugger;
    return of('Hello Alligator!').pipe(delay(2000));
  }


  constructor(private persistenceservice:PersistenceService) {
    
   }
}
