import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { TiramisuComponent } from './pages/tiramisu/tiramisu';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { SignupComponent } from './pages/signup/signup';
import { SigninComponent } from './pages/signin/signin';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Sweet Bites — Home' },

  { path: 'cookies', component: CookiesComponent, title: 'Cookies' },

  { path: 'tiramisu', component: TiramisuComponent, title: 'Tiramisu Collection' },

  { path: 'signup', component: SignupComponent , title : 'Signup'  },

  { path: 'login', component: SigninComponent },

  // TODO: create brownies page component
  // { path: 'brownies', component: BrowniesComponent, title: 'Brownies' },

  { path: '**', redirectTo: '' }
];
