import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-without-formbuilder',
  templateUrl: './form-without-formbuilder.component.html',
  styleUrls: ['./form-without-formbuilder.component.css']
})
export class FormWithoutFormbuilderComponent {

  signUpForm! : FormGroup

  constructor(){

  }

  ngOnInit(): void {
    this.createRegistrationForm();

  }

  createRegistrationForm(){
    this.signUpForm = new FormGroup({
      //top level form
      'firstName':new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(10),Validators.pattern('[a-zA-Z]{2,10}')]),
      'lastName' : new FormControl('',[Validators.minLength(2),Validators.maxLength(10)]),
      'mobileNo' : new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      'gender' : new FormControl('',[]),
      'email' : new FormControl('',[]),
      //child form
      'address' : new FormGroup({
        'line1': new FormControl('',[Validators.required]),
        'line2': new FormControl('',[]),
        'city': new FormControl('',[]),
        "state" : new FormControl('',[])

      })
    });
  }

  save(){
    console.log('form data',this.signUpForm.value)
  }


  get firstName(){
    //return this.signUpForm.get('firstName');
    return this.signUpForm.controls['firstName']
  }
  get mobileNo(){
    //return this.signUpForm.get('firstName');
    return this.signUpForm.controls['mobileNo']
  }




}

