import { TestBed } from '@angular/core/testing';

import { DataServiceService } from './data-service.service';
import { Data } from './model/data';

describe('DataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  fit('should be update a new message', () => {
    let _message: Data;
    const service: DataServiceService = TestBed.get(DataServiceService);
    service.currentMessage.subscribe(message => _message = message);
    expect(_message.areAllBorrowersTheSame).toBeUndefined();
    expect(_message.customerEligibleFor5YearsFixedOrMore).toBeUndefined();
    const applicationData = new Data();
    applicationData.areAllBorrowersTheSame = 'YES';
    applicationData.customerEligibleFor5YearsFixedOrMore = 'NO';
    service.changeMessage(applicationData);
    expect(_message.areAllBorrowersTheSame).toEqual('YES');
    expect(_message.customerEligibleFor5YearsFixedOrMore).toEqual('NO');
  });
});
