import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { ApplicationDataComponent } from './application-data/application-data.component';
import { DataServiceService } from './data-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Data } from './model/data';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ApplicationDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
