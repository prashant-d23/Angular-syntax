import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../../password-Validator/password-Validator';
import { emailValidator } from './emailValidator';

@Component({
  selector: 'app-email-domain-validation',
  templateUrl: './email-domain-validation.component.html',
  styleUrls: ['./email-domain-validation.component.css']
})
export class EmailDomainValidationComponent {

  emailValidation!:FormGroup;

  constructor(private fb:FormBuilder){

  }
  ngOnInit(){
    this.createEmailValidationForm();

    this.emailValidation.get('password')?.valueChanges.subscribe((el:any)=>{
      this.emailValidation.get('confirmPassword')?.updateValueAndValidity();
    });

  }

  createEmailValidationForm(){

    this.emailValidation = this.fb.group({
      "firstName" : ['',[Validators.required]],
      "lastName" : ['',[Validators.required]],
      "email" : ['',[Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2}'),emailValidator]],
      "password" : ['',[Validators.required,passwordValidator]],
      "confirmPassword" : ['',[Validators.required,passwordValidator]]
    });
  }

  get firstName(){
    return this.emailValidation.get('firstName')
  }
  get lastName(){
    return this.emailValidation.get('lastName')
  }
  get email(){
    return this.emailValidation.get('email')
  }
  get password(){
    return this.emailValidation.get('password')
  }
  get confirmPassword(){
    return this.emailValidation.get('confirmPassword')
  }


  saveForm(){
    console.log("form",this.emailValidation.value)
  }
  getData(){
    let obj = {
      "firstName" : "Tony",
      "lastName" : "stark",
      "email" : "ironman6335@gmail.com",
      "password" : "ironMan",
      "confirmPassword" : "ironMan"
    }
    this.emailValidation.setValue(obj)

  }
  patchData(){
    let obj = {
      "firstName" : "Prashant",
      "lastName" : "Deshpande",
    }
    this.emailValidation.patchValue(obj);
  }
  reset(){
    this.emailValidation.reset();
  }
}


