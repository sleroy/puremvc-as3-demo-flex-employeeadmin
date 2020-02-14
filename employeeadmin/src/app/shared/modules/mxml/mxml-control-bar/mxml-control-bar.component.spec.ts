import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlBar } from './mxml-control-bar.component';

describe('ControlBar', () => {
  let component: ControlBar;
  let fixture: ComponentFixture<ControlBar>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlBar ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
