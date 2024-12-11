// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ConcretoComponent } from './concreto/concreto.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'concreto', component: ConcretoComponent },
  { path: '**', redirectTo: '' }, 
];
