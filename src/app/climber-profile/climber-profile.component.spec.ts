import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimberProfileComponent } from './climber-profile.component';

describe('ClimberProfileComponent', () => {
  let component: ClimberProfileComponent;
  let fixture: ComponentFixture<ClimberProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimberProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimberProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
