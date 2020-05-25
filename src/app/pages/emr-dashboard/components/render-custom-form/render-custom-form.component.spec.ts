import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderCustomFormComponent } from './render-custom-form.component';

describe('RenderCustomFormComponent', () => {
  let component: RenderCustomFormComponent;
  let fixture: ComponentFixture<RenderCustomFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderCustomFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderCustomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
