import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ViajesComponent } from './viajes/viajes.component';
import { CalendarioComponent } from './calendario/calendario.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'viajes', component: ViajesComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: '**', component: NotFoundComponent },
];
