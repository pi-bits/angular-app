import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { ApplicationDataComponent } from './application-data/application-data.component';


const routes: Routes = [
  { path: '', redirectTo: '/welcome' , pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent },
  { path: 'application-data', component: ApplicationDataComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
