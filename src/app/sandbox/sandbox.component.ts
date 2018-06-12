
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileComponent } from './file/file.component';

@Component({
  selector: 'sandbox',  // <home></home>
  styleUrls: [ './sandbox.component.scss' ],
  templateUrl: './sandbox.component.html'
})
export class SandboxComponent implements OnInit, AfterViewInit{

  ngAfterViewInit(): void {
    this.files = this.child.files
  }

  ngOnInit(): void {
    this.buildForm()
  }

  @ViewChild(FileComponent) child
  isVisible: boolean = true;
  isDisabled: boolean = false;
  form: FormGroup
  files: [string]

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
    console.log(this.files)
  }

    
}