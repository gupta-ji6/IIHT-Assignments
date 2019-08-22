import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedTrainingComponent } from './completed-training.component';

describe('CompletedTrainingComponent', () => {
  let component: CompletedTrainingComponent;
  let fixture: ComponentFixture<CompletedTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
