import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithoutFormbuilderComponent } from './form-without-formbuilder.component';

describe('FormWithoutFormbuilderComponent', () => {
  let component: FormWithoutFormbuilderComponent;
  let fixture: ComponentFixture<FormWithoutFormbuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWithoutFormbuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormWithoutFormbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
