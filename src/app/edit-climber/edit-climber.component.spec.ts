import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClimberComponent } from './edit-climber.component';

describe('EditClimberComponent', () => {
  let component: EditClimberComponent;
  let fixture: ComponentFixture<EditClimberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditClimberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClimberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
