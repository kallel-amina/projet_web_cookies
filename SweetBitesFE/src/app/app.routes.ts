import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { TiramisuComponent } from './pages/tiramisu/tiramisu';
import { CookiesComponent } from './pages/cookies/cookies.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Sweet Bites — Home' },

  { path: 'cookies', component: CookiesComponent, title: 'Cookies' },

  { path: 'tiramisu', component: TiramisuComponent, title: 'Tiramisu Collection' },

  // TODO: create brownies page component
  // { path: 'brownies', component: BrowniesComponent, title: 'Brownies' },

  { path: '**', redirectTo: '' }
];
