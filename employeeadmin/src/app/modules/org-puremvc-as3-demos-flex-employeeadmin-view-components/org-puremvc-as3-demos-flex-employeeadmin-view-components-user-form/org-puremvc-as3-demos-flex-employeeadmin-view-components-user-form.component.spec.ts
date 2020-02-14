import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserForm } from './org-puremvc-as3-demos-flex-employeeadmin-view-components-user-form.component';

describe('UserForm', () => {
  let component: UserForm;
  let fixture: ComponentFixture<UserForm>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserForm ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
