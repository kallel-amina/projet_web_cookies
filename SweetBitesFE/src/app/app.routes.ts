import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { TiramisuComponent } from './pages/tiramisu/tiramisu';
import { CookiesComponent } from './pages/cookies/cookies';
import { LoginComponent } from './pages/login/login';
import { SignupComponent } from './pages/signup/signup';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Sweet Bites — Home' },

  { path: 'cookies', component: CookiesComponent, title: 'Cookies' },

  { path: 'tiramisu', component: TiramisuComponent, title: 'Tiramisu Collection' },

  { path: '', redirectTo: '/login', pathMatch: 'full' }, // default route

  { path: 'login', component: LoginComponent },

  { path: 'signup', component: SignupComponent },


  // TODO: create brownies page component
  // { path: 'brownies', component: BrowniesComponent, title: 'Brownies' },

  { path: '**', redirectTo: '' }
];
