import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorEditSkillsComponent } from './mentor-edit-skills.component';

describe('MentorEditSkillsComponent', () => {
  let component: MentorEditSkillsComponent;
  let fixture: ComponentFixture<MentorEditSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorEditSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorEditSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
