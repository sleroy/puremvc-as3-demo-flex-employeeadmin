import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VBox } from './flex-mx-vbox.component';

describe('VBox', () => {
  let component: VBox;
  let fixture: ComponentFixture<VBox>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VBox ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
