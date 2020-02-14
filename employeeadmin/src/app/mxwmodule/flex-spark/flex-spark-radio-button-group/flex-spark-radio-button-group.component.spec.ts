import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonGroup } from './flex-spark-radio-button-group.component';

describe('RadioButtonGroup', () => {
  let component: RadioButtonGroup;
  let fixture: ComponentFixture<RadioButtonGroup>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioButtonGroup ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
