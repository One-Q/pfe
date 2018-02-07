import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule }  from '@angular/http';

import { routes } from './admin.routes'
import { PCListComponent } from './pclist.component'
import { MaterialModule } from '../material/material.module';
import { AdminService } from './admin.service';

@NgModule({
  declarations: [
    PCListComponent
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
  //providers: [AdminService]
})
export class AdminModule {
  public static routes = routes
}