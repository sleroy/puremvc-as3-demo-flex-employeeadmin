import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolePanel } from './org-puremvc-as3-demos-flex-employeeadmin-view-components-role-panel.component';

describe('RolePanel', () => {
  let component: RolePanel;
  let fixture: ComponentFixture<RolePanel>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolePanel ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolePanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
