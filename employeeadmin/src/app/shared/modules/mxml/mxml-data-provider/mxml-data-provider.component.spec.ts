import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { dataProvider } from './mxml-data-provider.component';

describe('dataProvider', () => {
  let component: dataProvider;
  let fixture: ComponentFixture<dataProvider>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ dataProvider ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(dataProvider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
