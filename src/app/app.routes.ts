import { Routes } from '@angular/router';
import { DataResolver } from './app.resolver';
import { QrcodeComponent } from './qrcode/qrcode.component';

export const ROUTES: Routes = [
  { path: '', component: QrcodeComponent }
];
