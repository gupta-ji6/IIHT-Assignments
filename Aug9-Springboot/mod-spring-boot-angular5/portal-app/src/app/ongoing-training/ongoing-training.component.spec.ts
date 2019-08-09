import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingTrainingComponent } from './ongoing-training.component';

describe('OngoingTrainingComponent', () => {
  let component: OngoingTrainingComponent;
  let fixture: ComponentFixture<OngoingTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngoingTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngoingTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
