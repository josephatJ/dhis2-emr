import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderReportingRatesComponent } from './render-reporting-rates.component';

describe('RenderReportingRatesComponent', () => {
  let component: RenderReportingRatesComponent;
  let fixture: ComponentFixture<RenderReportingRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderReportingRatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderReportingRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
