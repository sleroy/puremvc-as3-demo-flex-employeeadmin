import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationControlBar } from './flex-mx-application-control-bar.component';

describe('ApplicationControlBar', () => {
  let component: ApplicationControlBar;
  let fixture: ComponentFixture<ApplicationControlBar>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationControlBar ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationControlBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
