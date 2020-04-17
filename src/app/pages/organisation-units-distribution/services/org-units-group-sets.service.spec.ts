import { TestBed } from '@angular/core/testing';

import { OrgUnitsGroupSetsService } from './org-units-group-sets.service';

describe('OrgUnitsGroupSetsService', () => {
  let service: OrgUnitsGroupSetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrgUnitsGroupSetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
