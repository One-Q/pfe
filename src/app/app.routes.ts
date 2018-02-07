import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { ReactComponent } from './react';
import { ProfileComponent } from './profile';
//import { angularProfileCard } from '../../components/main-profile/index';
import { NoContentComponent } from './no-content';



import { DataResolver } from './app.resolver';
import { GridQrCodeComponent } from './gridQrCode/index';
import { AdminComponent } from './admin/index';

export const ROUTES: Routes = [
  { path: '',      component: AdminComponent },
  { path: 'posts', loadChildren: './posts#PostsModule' },
  { path: 'profile', component: ProfileComponent },
  { path: 'problem', loadChildren: './problem#ProblemsModule' },
  { path: 'admin', loadChildren: './admin#AdminModule' },
  { path: 'react', component: ReactComponent },
  { path: '**',    component: NoContentComponent },
];
