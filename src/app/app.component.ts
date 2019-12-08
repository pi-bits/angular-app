import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-app';

  constructor(){
  }

  ngOnInit(){
  }
  update(){
    console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
  }
}
