import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetFilterComponent } from './dataset-filter.component';

describe('DatasetFilterComponent', () => {
  let component: DatasetFilterComponent;
  let fixture: ComponentFixture<DatasetFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasetFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
