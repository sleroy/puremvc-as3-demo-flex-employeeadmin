import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form } from './mxml-form.component';

describe('Form', () => {
  let component: Form;
  let fixture: ComponentFixture<Form>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
