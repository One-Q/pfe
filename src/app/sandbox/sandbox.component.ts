
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sandbox',  // <home></home>
  styleUrls: [ './sandbox.component.scss' ],
  templateUrl: './sandbox.component.html'
})
export class SandboxComponent implements OnInit{

  ngOnInit(): void {
    this.buildForm()
  }

  isVisible: boolean = true;
  isDisabled: boolean = false;
  form: FormGroup

  constructor(private formBuilder: FormBuilder) {

  }

  buildForm() {
    this.form = this.formBuilder.group({
      login: ['', Validators.required],
      password: [''],
      role: ['']
    })
  }

  checkRole() {
    let role = this.form.value.role
    let passwordController = this.form.controls['password']
    if (role == 'teacher') {
      passwordController.setValidators(Validators.required)
      passwordController.updateValueAndValidity()
      return true
    }
    passwordController.clearValidators()
    passwordController.updateValueAndValidity()
    return false
  }

  submit() {
    console.log(this.form.valid)
  }

    
}