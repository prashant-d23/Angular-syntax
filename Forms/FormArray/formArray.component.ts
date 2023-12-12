import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.css']
})
export class FormarrayComponent implements OnInit {
  skillForm!: FormGroup;

  constructor(private fb: FormBuilder) {

  }
  ngOnInit() {
    this.skillForm = this.fb.group({
      skills: this.fb.array([]),
    });  }

  get skills() {
    return this.skillForm.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(this.fb.control('', Validators.required));
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }


}
