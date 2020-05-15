import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupLoginPage } from './signup-login.page';

describe('SignupLoginPage', () => {
  let component: SignupLoginPage;
  let fixture: ComponentFixture<SignupLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
