import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorCompletedTrainingsComponent } from './mentor-completed-trainings.component';

describe('MentorCompletedTrainingsComponent', () => {
  let component: MentorCompletedTrainingsComponent;
  let fixture: ComponentFixture<MentorCompletedTrainingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorCompletedTrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorCompletedTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
