import { AbstractControl, ValidationErrors } from "@angular/forms";


export function emailValidator(control:AbstractControl):ValidationErrors | null{

  const email = control.value;


  if (!email) {
    return null;
  }

  const domain = email.split('@')[1];

  if(domain.toLowerCase() !== 'gmail.com'){
    return {"invalidDomain" : true}
  }else{
    return null;
  }




  //   if(email.toLowerCase().includes('gmail')){
  //   return null;
  // }else{
  //   return {"checkgmail" : true}
  // }


  // const email = control.value;
  //   const domain = email.substring(email.lastIndexOf('@') + 1);

  //   if (email === '' || domain === "gmail.com") {
  //     return null; // valid domain
  //   } else {
  //     return {'invalidDomain': true}; // invalid domain
  //   }



  // const email = control.value;
  // const parts = email.split('@');

  // if (parts.length === 2) {
  //   const domain = parts[1].split('.')[0];
  //   if (domain === 'gmail') {
  //     return null; // Valid email
  //   }
  // }

  // return { 'invalidGmailDomain': true };





  };




//now we will get the value of email input filed cause we've registered this validator with email form control

//console.log(email)
//console.log(control.root) //comple form group access , we can access all form controls


