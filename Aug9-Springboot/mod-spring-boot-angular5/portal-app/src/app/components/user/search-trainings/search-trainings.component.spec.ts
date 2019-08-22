import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTrainingsComponent } from './search-trainings.component';

describe('SearchTrainingsComponent', () => {
  let component: SearchTrainingsComponent;
  let fixture: ComponentFixture<SearchTrainingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
