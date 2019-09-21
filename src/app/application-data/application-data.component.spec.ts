import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationDataComponent } from './application-data.component';
import { ApplicationType } from '../model/applicationType';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('ApplicationDataComponent', () => {
  let component: ApplicationDataComponent;
  let fixture: ComponentFixture<ApplicationDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ApplicationDataComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate application types', () => {
    const nativeElement = fixture.debugElement.nativeElement;
    const applicationTypeGroup: HTMLUListElement = nativeElement.querySelector('ul[data-qa="applicationTypes"]');
    fixture.detectChanges();
    expect(applicationTypeGroup).toBeTruthy();
    expect(applicationTypeGroup.childElementCount).toBe(4);
  })

  it('should get application Types', () => {
    const nativeElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const expectedApplicationTypes: ApplicationType[] = component.applicationTypes();
      const actualApplicationTypes: HTMLCollection = nativeElement.querySelector('ul[data-qa="applicationTypes"]').children;
      expect(actualApplicationTypes.length).toEqual(4);

      Array.from(actualApplicationTypes).forEach(function (item, index) {
        debugger;
        expect(item.firstElementChild.firstElementChild.getAttribute('value'))
          .toBe(expectedApplicationTypes[index].getId());

        expect(item.firstElementChild.firstElementChild.nextElementSibling.innerHTML)
          .toBe(expectedApplicationTypes[index].getValue());

      });
    });
  });

  fit('should submit valid application data', () => {

    const nativeElement = fixture.debugElement.nativeElement;
    const applicationType: HTMLInputElement = nativeElement.querySelector('#FTB');
    expect(ApplicationType).not.toBe(undefined);
    applicationType.click();

    fixture.detectChanges();

    expect(component.applicationDataForm.controls['applicationType'].value).toEqual('FTB');
    nativeElement.querySelector('#submit').click();

    expect(component.applicationDataForm.valid).toBeTruthy();

  })


  fit('should not submit valid application data', () => {
    const nativeElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    nativeElement.querySelector('#submit').click();
    expect(component.applicationDataForm.valid).toBeFalsy();

  })



});
