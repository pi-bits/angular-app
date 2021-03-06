import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ApplicationType } from '../model/applicationType';
import { PersistenceService } from '../persistence.service';


@Component({
  selector: 'app-application-data',
  templateUrl: './application-data.component.html',
  styleUrls: ['./application-data.component.css']
})
export class ApplicationDataComponent implements OnInit {
  public applicationDataForm: FormGroup;
  public isRemoApplicationType:boolean = false;
  public applicationTypeInput;  


  applicationTypes(): ApplicationType[] {
    return [
      new ApplicationType('REMO', 'Remortgages'),
      new ApplicationType('FTB', 'First Time Buyer'),
      new ApplicationType('SWITCHER', 'Switcher'),
      new ApplicationType('OTHER', 'Other application types')
    ]

  }


  constructor(private _fb: FormBuilder , private _persistenceService: PersistenceService,private _) {
    this.applicationDataForm = this._fb.group({
      applicationTypeInput: ['',Validators.required]
    })
  }

  ngOnInit() {

  }
  onSubmit() {
    console.warn(this.applicationDataForm.value);
    
    this._persistenceService.getAll();
  }

  public applicationTypeChangeHandler(event:any) {

      let selectedApplicationType = this.applicationTypes().find((applicationType: ApplicationType) => {
        return applicationType.getId() === event.target.value;
      });
      this.isRemoApplicationType = selectedApplicationType.getId() === 'REMO';


  }


}
