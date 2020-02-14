import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkBar } from './flex-mx-link-bar.component';

describe('LinkBar', () => {
  let component: LinkBar;
  let fixture: ComponentFixture<LinkBar>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkBar ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
