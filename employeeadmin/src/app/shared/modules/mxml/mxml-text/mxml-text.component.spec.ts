import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text } from './mxml-text.component';

describe('Text', () => {
  let component: Text;
  let fixture: ComponentFixture<Text>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
