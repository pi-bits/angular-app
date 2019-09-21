import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WelcomeComponent } from './welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { Data } from '../model/data';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  // tslint:disable-next-line:no-unused-expression
  let testBedService: DataServiceService;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  // const dataServiceSpy = jasmine.createSpyObj('DataServiceService', ['changeMessage']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ WelcomeComponent ],
      providers: [
        { provide: Router,      useValue: routerSpy },
        DataServiceService
        // { provide: DataServiceService,      useValue: dataServiceSpy },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    testBedService = TestBed.get(DataServiceService);
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('form is valid', () => {
    const caseId = component.form.controls['caseId'];
    caseId.setValue('1234567890');
    expect(component.form.valid).toBeTruthy();
  });

  it('Case Id  is required', () => {
    let errors = {};
    const caseId = component.form.controls['caseId'];
    errors = caseId.errors || {};
    expect(component.form.valid).toBeFalsy();
    expect(errors['required']).toBeTruthy();
  });

  it('Case Id has to be exact 10 digits', () => {
    let errors = {};
    const caseId = component.form.controls['caseId'];
    caseId.setValue('122');
    errors = caseId.errors || {};
    expect(component.form.valid).toBeFalsy();
    console.log(errors);
    expect(errors['minlength']).toBeTruthy();
    expect(errors['pattern']).toBeTruthy();
  });

  it('Case Id  cannot be character value', () => {
    let errors = {};
    const caseId = component.form.controls['caseId'];
    caseId.setValue('kkkkkkkkkk');
    errors = caseId.errors || {};
    expect(component.form.valid).toBeFalsy();
    console.log(errors);
    expect(errors['pattern']).toBeTruthy();
  });

  it('Should Submit the form', () => {
    const caseId = component.form.controls['caseId'];
    caseId.setValue('1234567890');
    component.submit();
    expect(component.form.valid).toBeTruthy();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/application-data']);
    // const _aplicationData = new ApplicationData();
    // _aplicationData.customerEligibleFor5YearsFixedOrMore = 'NO';
    // _aplicationData.areAllBorrowersTheSame = 'YES';
    // expect(dataServiceSpy.changeMessage).toHaveBeenCalledWith(_aplicationData);
    let _message: Data = new Data();
    testBedService.currentMessage.subscribe(message => _message = message);
    expect(_message.areAllBorrowersTheSame).toEqual('YES');
    expect(_message.customerEligibleFor5YearsFixedOrMore).toEqual('NO');

  });



});
