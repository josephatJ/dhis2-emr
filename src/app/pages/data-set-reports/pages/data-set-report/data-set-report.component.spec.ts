import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSetReportComponent } from './data-set-report.component';

describe('DataSetReportComponent', () => {
  let component: DataSetReportComponent;
  let fixture: ComponentFixture<DataSetReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSetReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSetReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
