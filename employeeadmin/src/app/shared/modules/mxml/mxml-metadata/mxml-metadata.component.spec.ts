import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Metadata } from './mxml-metadata.component';

describe('Metadata', () => {
  let component: Metadata;
  let fixture: ComponentFixture<Metadata>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Metadata ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Metadata);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
