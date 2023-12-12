import { Component } from '@angular/core';
import { FormBuilder,FormControl, FormGroup,Validators } from '@angular/forms';
import { passwordValidator } from '../password-Validator';

@Component({
  selector: 'app-password-validator-form',
  templateUrl: './password-validator-form.component.html',
  styleUrls: ['./password-validator-form.component.css']
})
export class PasswordValidatorFormComponent {

  signUpForm!: FormGroup

  constructor(private fb:FormBuilder){

  }
  ngOnInit(): void {
    this.createSignUpForm();
    //change event similar to ngModelChange
    //on password change recalculate the confirm password logic
    this.signUpForm.get('password')?.valueChanges.subscribe((el:any)=>{
      this.signUpForm.get('confirmPassword')?.updateValueAndValidity();
    })
  }

  createSignUpForm(){
    this.signUpForm = this.fb.group({
      "userName" : ['',[Validators.required]],
      "password" : ['',[Validators.required]],
      "confirmPassword" : ['',[Validators.required,passwordValidator]]
    })
  }

  get userName(){
    return this.signUpForm.get('userName')
  }
  get password(){
    return this.signUpForm.get('password')
  }
  get confirmPassword(){
    return this.signUpForm.get('confirmPassword')
  }

  saveForm(){
    console.log(this.signUpForm.value);

  }

}


