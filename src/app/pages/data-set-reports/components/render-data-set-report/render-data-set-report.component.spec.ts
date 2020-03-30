import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderDataSetReportComponent } from './render-data-set-report.component';

describe('RenderDataSetReportComponent', () => {
  let component: RenderDataSetReportComponent;
  let fixture: ComponentFixture<RenderDataSetReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderDataSetReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderDataSetReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
