import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditTechComponent } from './admin-edit-tech.component';

describe('AdminEditTechComponent', () => {
  let component: AdminEditTechComponent;
  let fixture: ComponentFixture<AdminEditTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
