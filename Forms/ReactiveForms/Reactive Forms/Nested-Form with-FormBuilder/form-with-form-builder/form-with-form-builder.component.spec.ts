import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithFormBuilderComponent } from './form-with-form-builder.component';

describe('FormWithFormBuilderComponent', () => {
  let component: FormWithFormBuilderComponent;
  let fixture: ComponentFixture<FormWithFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWithFormBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormWithFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
