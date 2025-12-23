import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { TiramisuComponent } from './pages/tiramisu/tiramisu';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { brownies } from './pages/brownies/brownies';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Sweet Bites — Home' },

  { path: 'cookies', component: CookiesComponent, title: 'Cookies' },

  { path: 'tiramisu', component: TiramisuComponent, title: 'Tiramisu Collection' },

  
   { path: 'brownies', component: brownies , title: 'Brownies' },

  { path: '**', redirectTo: '' }
];
