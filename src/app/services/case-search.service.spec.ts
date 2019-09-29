import { TestBed } from '@angular/core/testing';

import { CaseSearchService } from './case-search.service';

describe('CaseSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaseSearchService = TestBed.get(CaseSearchService);
    expect(service).toBeTruthy();
  });
});
