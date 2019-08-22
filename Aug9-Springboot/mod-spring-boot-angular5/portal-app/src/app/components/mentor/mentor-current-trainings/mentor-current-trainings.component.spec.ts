import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorCurrentTrainingsComponent } from './mentor-current-trainings.component';

describe('MentorCurrentTrainingsComponent', () => {
  let component: MentorCurrentTrainingsComponent;
  let fixture: ComponentFixture<MentorCurrentTrainingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorCurrentTrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorCurrentTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
