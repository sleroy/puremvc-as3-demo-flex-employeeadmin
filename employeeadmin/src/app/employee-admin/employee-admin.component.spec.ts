import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAdmin } from './employee-admin.component';

describe('EmployeeAdmin', () => {
  let component: EmployeeAdmin;
  let fixture: ComponentFixture<EmployeeAdmin>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeAdmin ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
