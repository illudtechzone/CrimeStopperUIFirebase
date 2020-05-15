import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingPage } from './missing.page';

describe('MissingPage', () => {
  let component: MissingPage;
  let fixture: ComponentFixture<MissingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
