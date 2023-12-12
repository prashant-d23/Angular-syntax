import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordValidatorFormComponent } from './password-validator-form.component';

describe('PasswordValidatorFormComponent', () => {
  let component: PasswordValidatorFormComponent;
  let fixture: ComponentFixture<PasswordValidatorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordValidatorFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordValidatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
