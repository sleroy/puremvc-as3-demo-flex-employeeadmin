import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HBox } from './flex-mx-hbox.component';

describe('HBox', () => {
  let component: HBox;
  let fixture: ComponentFixture<HBox>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HBox ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
