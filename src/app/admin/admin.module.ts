import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { routes } from './admin.routes'
import { PCListComponent } from './pclist/pclist.component'
import { ListUploadComponent } from './list-upload/list-upload.component';
import { ListProblemComponent } from './list-problem/list-problem.component';
import { MaterialModule } from '../material/material.module';
import { AdminService } from './admin.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material'
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    PCListComponent,
    ListUploadComponent,
    ListProblemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MatTableModule,
    MatCheckboxModule
  ],
  providers: [AdminService]
})
export class AdminModule {
  public static routes = routes
}