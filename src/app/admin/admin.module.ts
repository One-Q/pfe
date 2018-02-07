import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { routes } from './admin.routes'
import { PCListComponent } from './pclist.component'
import { ListUploadComponent } from './list-upload/list-upload.component';
import { MaterialModule } from '../material/material.module';
import { AdminService } from './admin.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material'

@NgModule({
  declarations: [
    PCListComponent,
    ListUploadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [AdminService]
})
export class AdminModule {
  public static routes = routes
}