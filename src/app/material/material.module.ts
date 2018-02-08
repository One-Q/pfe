import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatCardModule,
  MatListModule,
  MatGridListModule,
  MatSnackBarModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule,
  MatCheckboxModule
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
    MatTableModule,
    MatCheckboxModule
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
    MatTableModule,
    MatCheckboxModule
  ]
})
export class MaterialModule {}