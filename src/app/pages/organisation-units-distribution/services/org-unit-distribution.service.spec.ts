import { TestBed } from '@angular/core/testing';

import { OrgUnitDistributionService } from './org-unit-distribution.service';

describe('OrgUnitDistributionService', () => {
  let service: OrgUnitDistributionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrgUnitDistributionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
