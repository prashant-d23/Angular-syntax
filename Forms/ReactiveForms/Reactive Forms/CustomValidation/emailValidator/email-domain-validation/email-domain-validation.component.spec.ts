import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailDomainValidationComponent } from './email-domain-validation.component';

describe('EmailDomainValidationComponent', () => {
  let component: EmailDomainValidationComponent;
  let fixture: ComponentFixture<EmailDomainValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailDomainValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailDomainValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
