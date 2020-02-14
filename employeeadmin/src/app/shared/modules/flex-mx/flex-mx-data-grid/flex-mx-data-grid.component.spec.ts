import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGrid } from './flex-mx-data-grid.component';

describe('DataGrid', () => {
  let component: DataGrid;
  let fixture: ComponentFixture<DataGrid>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataGrid ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
