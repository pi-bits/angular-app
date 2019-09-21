import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ApplicationType } from '../model/applicationType';
import { ApplicationData } from '../model/applicationData';

@Component({
  selector: 'app-application-data',
  templateUrl: './application-data.component.html',
  styleUrls: ['./application-data.component.css']
})
export class ApplicationDataComponent implements OnInit {
  applicationDataForm: FormGroup;
  applicationData: ApplicationData;
  

  applicationTypes(): ApplicationType[] {
    return [
      new ApplicationType('REMO', 'Remortgages'),
      new ApplicationType('FTB', 'First Time Buyer'),
      new ApplicationType('SWITCHER', 'Switcher'),
      new ApplicationType('OTHER', 'Other application types')
    ]

  }


  constructor(private _fb: FormBuilder) {
    this.applicationDataForm = this._fb.group({
      applicationType:  new FormControl('',[Validators.required],)
    })
  }

  ngOnInit() {
   
  }
  onSubmit(){
    console.warn(this.applicationDataForm.value);
  }
}
