import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingRatesSummaryComponent } from './reporting-rates-summary.component';

describe('ReportingRatesSummaryComponent', () => {
  let component: ReportingRatesSummaryComponent;
  let fixture: ComponentFixture<ReportingRatesSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportingRatesSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportingRatesSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
