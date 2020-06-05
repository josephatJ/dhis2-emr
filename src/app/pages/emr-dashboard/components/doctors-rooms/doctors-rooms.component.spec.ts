import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsRoomsComponent } from './doctors-rooms.component';

describe('DoctorsRoomsComponent', () => {
  let component: DoctorsRoomsComponent;
  let fixture: ComponentFixture<DoctorsRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorsRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
