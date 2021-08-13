import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-movement-form',
  templateUrl: './movement-form.component.html',
  styleUrls: ['./movement-form.component.css']
})
export class MovementFormComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      date: ['', Validators.compose([
        Validators.required])],
      description: ['', Validators.compose([
        Validators.required])],
      quota: ['', Validators.compose([
        Validators.required])],
      source: ['', Validators.compose([
        Validators.required])],

    });
  }

  save() {
    if (!this.form.valid) {
      return;
    }

  }
}
