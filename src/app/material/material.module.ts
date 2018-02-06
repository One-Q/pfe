import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatCardModule,
  MatListModule,
  MatGridListModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
  ]
})
export class MaterialModule {}