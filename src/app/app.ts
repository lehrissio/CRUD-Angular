import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  formBuilder = inject(FormBuilder);
  userForm!: FormGroup;
  constructor() {
    this.userForm = this.formBuilder.group({
      name: [],
      email: [],
      age: [],
      gender: [''],
    }) 
  }
  save() {
    let formValues = this.userForm.value;
    console.log(formValues);
  }
}
