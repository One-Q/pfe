import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule }  from '@angular/http';

import { routes } from './problems.routes'
import { ProblemFormComponent } from './problem-form/problem-form.component'
import { MaterialModule } from '../material/material.module';
import { ProblemsService } from './problems.service';

@NgModule({
  declarations: [
    ProblemFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  providers: [ProblemsService]
})
export class ProblemsModule {
  public static routes = routes
}