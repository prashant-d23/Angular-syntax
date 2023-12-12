import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordValidator(control:AbstractControl):ValidationErrors | null{

  const confirmPassword = control.value

  console.log(confirmPassword)
  // console.log(control.root)
  const password = control.root.get('password')?.value;
  console.log(password)

  if(password != "" && (password != confirmPassword)){
    return {"passwordMismatch":true}
  }else {
    return null;
  }


}
