import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { Data } from '../model/data';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private dataService: DataServiceService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      caseId: ['', [Validators.required, Validators.minLength(10), Validators.pattern('^\\d{10}$')]]
    });
  }

  submit() {
    if (this.form.valid) {
      const applicattionData = new Data();
      applicattionData.areAllBorrowersTheSame = 'YES';
      applicattionData.customerEligibleFor5YearsFixedOrMore = 'NO';
      this.dataService.updateMessage(applicattionData);
      this.router.navigate(['/application-data']);
    }
  }

}
