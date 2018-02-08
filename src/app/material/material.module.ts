import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatCardModule,
  MatListModule,
  MatGridListModule,
  MatSnackBarModule,
  MatInputModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatTableModule,
  MatCheckboxModule,
  MatPaginatorModule,
  MatTabsModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatTabsModule
    //MatPaginator
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatTabsModule
    //MatPaginator
  ]
})
export class MaterialModule {}