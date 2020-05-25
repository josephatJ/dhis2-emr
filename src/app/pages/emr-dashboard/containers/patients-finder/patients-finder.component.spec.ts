import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsFinderComponent } from './patients-finder.component';

describe('PatientsFinderComponent', () => {
  let component: PatientsFinderComponent;
  let fixture: ComponentFixture<PatientsFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
