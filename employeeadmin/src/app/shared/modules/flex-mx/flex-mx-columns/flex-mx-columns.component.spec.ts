import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { columns } from './flex-mx-columns.component';

describe('columns', () => {
  let component: columns;
  let fixture: ComponentFixture<columns>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ columns ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(columns);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
