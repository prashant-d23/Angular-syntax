import { Component } from '@angular/core';

@Component({
  selector: 'app-validation-form',
  templateUrl: './validation-form.component.html',
  styleUrls: ['./validation-form.component.css']
})
export class ValidationFormComponent {

  save(form:any){
    console.log(form.value)
  }


}
