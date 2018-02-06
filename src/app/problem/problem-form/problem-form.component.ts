import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ProblemsService } from '../problems.service';

@Component({
  templateUrl: './problem-form.component.html',
  styleUrls: [
    './problem-form.component.css'
  ]
})
export class ProblemFormComponent implements OnInit, OnDestroy {

  private sub: Subscription;
  public machineName: string
  public machine: Object = {}
  public errorMessages: Object = {}
  form: FormGroup
  image = {}

  constructor(private formBuilder: FormBuilder, private router: Router,private route: ActivatedRoute, private service: ProblemsService){}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.machineName = params['machineName'];
    });
    this.validateMachineName()
    this.constructForm()
  }

  validateMachineName(){
    this.service.machineNameValid(this.machineName).subscribe(data => {
      let obj = data.json()
      this.machine = obj
    }, err => {
      if(err) {
        this.router.navigate(['**'])
      }
    })
  }

  constructForm(){
    this.form = this.formBuilder.group({
      mail: ['', [
        Validators.required,
        this.validateEmail
      ]],
      machineName: [this.machineName, [
        Validators.required,
      ]],
      description:['', [
        Validators.required,
        this.validateDesc
      ]]
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  fileChange($event) {
    let reader = new FileReader();
    if($event.target.files && $event.target.files.length > 0) {
      let file = $event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.image = {
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        }
      }
    }
  }

  submitForm(){
    if(this.form.valid){
      console.log('Form is valid')
    }
  }

  validateEmail(c: FormControl) {
    let EMAIL_REGEXP = /^.{2,20}\..{2,20}@(student\.vinci\.be|vinci\.be)$/
  
    return EMAIL_REGEXP.test(c.value) ? null : {
      validateEmail: {
        valid: false
      }
    };
  }

  validateDesc(c: FormControl) {
    let DESC_REGEXP = /^.{3,200}$/
  
    return DESC_REGEXP.test(c.value) ? null : {
      validateDesc: {
        valid: false
      }
    };
  }
  
}