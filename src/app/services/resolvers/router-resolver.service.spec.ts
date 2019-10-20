import { TestBed } from '@angular/core/testing';

import { RouterResolverService } from './router-resolver.service';

describe('RouterResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouterResolverService = TestBed.get(RouterResolverService);
    expect(service).toBeTruthy();
  });
});
