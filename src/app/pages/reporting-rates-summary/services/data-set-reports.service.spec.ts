import { TestBed } from '@angular/core/testing';

import { DataSetReportsService } from './data-set-reports.service';

describe('DataSetReportsService', () => {
  let service: DataSetReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSetReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
