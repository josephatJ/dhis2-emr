import { TestBed } from '@angular/core/testing';

import { ReportingRatesService } from './reporting-rates.service';

describe('ReportingRatesService', () => {
  let service: ReportingRatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportingRatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
