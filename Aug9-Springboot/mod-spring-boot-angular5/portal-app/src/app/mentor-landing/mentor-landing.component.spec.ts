import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorLandingComponent } from './mentor-landing.component';

describe('MentorLandingComponent', () => {
  let component: MentorLandingComponent;
  let fixture: ComponentFixture<MentorLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
