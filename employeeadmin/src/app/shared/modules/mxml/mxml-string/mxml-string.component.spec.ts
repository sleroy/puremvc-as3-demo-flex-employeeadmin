import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { String } from './mxml-string.component';

describe('String', () => {
  let component: String;
  let fixture: ComponentFixture<String>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ String ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(String);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
