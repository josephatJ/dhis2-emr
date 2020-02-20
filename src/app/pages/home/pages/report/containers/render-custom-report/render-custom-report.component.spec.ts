import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderCustomReportComponent } from './render-custom-report.component';

describe('RenderCustomReportComponent', () => {
  let component: RenderCustomReportComponent;
  let fixture: ComponentFixture<RenderCustomReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderCustomReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderCustomReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
