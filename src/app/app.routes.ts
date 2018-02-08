import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { ReactComponent } from './react';
import { ProfileComponent } from './profile';
//import { angularProfileCard } from '../../components/main-profile/index';
import { NoContentComponent } from './no-content';
import { DataResolver } from './app.resolver';
import { AdminComponent } from './admin/index';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'problem', loadChildren: './problem#ProblemsModule' },
  { path: 'admin', component: AdminComponent },
];
