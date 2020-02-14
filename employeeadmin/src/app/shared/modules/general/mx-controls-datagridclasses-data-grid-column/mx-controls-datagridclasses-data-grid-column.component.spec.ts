import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGridColumn } from './mx-controls-datagridclasses-data-grid-column.component';

describe('DataGridColumn', () => {
  let component: DataGridColumn;
  let fixture: ComponentFixture<DataGridColumn>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataGridColumn ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGridColumn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
