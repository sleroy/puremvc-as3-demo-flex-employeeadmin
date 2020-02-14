import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Binding } from './flex-mx-binding.component';

describe('Binding', () => {
  let component: Binding;
  let fixture: ComponentFixture<Binding>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Binding ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Binding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
