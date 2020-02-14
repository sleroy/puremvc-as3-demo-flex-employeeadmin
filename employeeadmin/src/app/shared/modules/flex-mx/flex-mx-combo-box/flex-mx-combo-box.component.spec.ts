import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboBox } from './flex-mx-combo-box.component';

describe('ComboBox', () => {
  let component: ComboBox;
  let fixture: ComponentFixture<ComboBox>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboBox ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
