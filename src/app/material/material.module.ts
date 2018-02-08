import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatCardModule,
  MatListModule,
  MatGridListModule,
  MatSnackBarModule,
  MatInputModule,
  MatButtonModule,
  MatSlideToggleModule
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
    MatSlideToggleModule
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
    MatSlideToggleModule
  ]
})
export class MaterialModule {}