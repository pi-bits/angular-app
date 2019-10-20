import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { Data } from '../model/data';
import { CaseSearchService } from '../services/case-search.service';
import { ApplicationData } from '../model/applicationData';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public form: FormGroup;
  public applicationData: ApplicationData;
  public loading=false;
  constructor(private fb: FormBuilder, private router: Router, private dataService: DataServiceService, private caseSearch: CaseSearchService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      caseId: ['', [Validators.required, Validators.minLength(10), Validators.pattern('^\\d{10}$')]]
    });
  }

  submit() {

    if (this.form.valid) {
      this.loading=true;
      const applicattionData = new Data();
      applicattionData.areAllBorrowersTheSame = 'YES';
      applicattionData.customerEligibleFor5YearsFixedOrMore = 'NO';
      this.dataService.updateMessage(applicattionData);
     
      this.caseSearch.search(this.form.controls['caseId'].value).subscribe((val)=>{
       this.applicationData=val;
        this.router.navigate(['/application-data',this.form.controls['caseId'].value]);
     });

     
    }
  }

}
