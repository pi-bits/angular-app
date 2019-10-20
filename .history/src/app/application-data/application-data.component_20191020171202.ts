import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ApplicationType } from '../model/applicationType';
import { PersistenceService } from '../persistence.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';


@Component({
  selector: 'app-application-data',
  templateUrl: './application-data.component.html',
  styleUrls: ['./application-data.component.css']
})
export class ApplicationDataComponent implements OnInit {
  public applicationDataForm: FormGroup;
  public isRemoApplicationType: boolean = false;
  public applicationTypeInput;
  public snapshotRoute:ActivatedRouteSnapshot;
  public externalApplicationIdWithActivatedRoute;
  public externalApplicationIdWithSnapshotActivatedroute;


  applicationTypes(): ApplicationType[] {
    return [
      new ApplicationType('REMO', 'Remortgages'),
      new ApplicationType('FTB', 'First Time Buyer'),
      new ApplicationType('SWITCHER', 'Switcher'),
      new ApplicationType('OTHER', 'Other application types')
    ]

  }


  constructor(private _fb: FormBuilder, private _persistenceService: PersistenceService, private _activatedRoute: ActivatedRoute) {
    this.applicationDataForm = this._fb.group({
      applicationTypeInput: ['', Validators.required]
    })
  }

  ngOnInit() {

    this.snapshotRoute = this._activatedRoute.snapshot;

    his.route.snapshot.data;
    this._activatedRoute.data.subscribe(data => {
      console.log('Check route resolver data')
      console.log(data)
    })


    this._activatedRoute.params.subscribe((vals) => {
      this.externalApplicationIdWithActivatedRoute = vals;
    });

  }
  onSubmit() {

    console.warn(this.applicationDataForm.value);

    console.log("Activated Route SnapShot value : " + this.snapshotRoute.params);
    console.log("Activated Route Only value : " + this.externalApplicationIdWithActivatedRoute);

    this._persistenceService.getAll();
  }

  public applicationTypeChangeHandler(event: any) {

    let selectedApplicationType = this.applicationTypes().find((applicationType: ApplicationType) => {
      return applicationType.getId() === event.target.value;
    });
    this.isRemoApplicationType = selectedApplicationType.getId() === 'REMO';


  }


}
