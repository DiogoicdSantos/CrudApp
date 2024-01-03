import { Routes } from '@angular/router';
import { HomeComponent } from './users/home/home.component';
import { CreateComponent } from './users/create/create.component';
import { EditComponent } from './users/edit/edit.component';

export const routes: Routes = [
  { path: 'users/home', component: HomeComponent },
  { path: 'users', redirectTo: 'users/home', pathMatch: 'full' },
  { path: '', redirectTo: 'users/home', pathMatch: 'full' },
  { path: 'users/add', component: CreateComponent },
  { path: 'users/edit/:id', component: EditComponent },
];
