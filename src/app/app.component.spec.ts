import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterTestingModule} from '@angular/router/testing'
import * as  moment from 'moment';

describe('AppComponent', () => {
  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[
      RouterTestingModule
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


  fit('should get now from mock date', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    console.log();
    var today = moment('2015-10-19').toDate()
    jasmine.clock().mockDate(today);
    expect(moment().valueOf()).toEqual(today.valueOf());
    console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
  });


});
