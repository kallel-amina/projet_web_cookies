import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { TiramisuComponent } from './pages/tiramisu/tiramisu';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { SignupComponent } from './pages/signup/signup';
import { SigninComponent } from './pages/signin/signin';
import { ProfileComponent } from './pages/profile/profile';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Sweet Bites — Home' },

  { path: 'cookies', component: CookiesComponent, title: 'Cookies' },

  { path: 'tiramisu', component: TiramisuComponent, title: 'Tiramisu Collection' },
  {path:'signin', component: SigninComponent, title:'Sign In'},

  { path: 'signup', component: SignupComponent , title : 'Signup'  },


  { path: 'login', component: SigninComponent },

  { path: 'profile', component: ProfileComponent, title: 'profile' },

  // TODO: create brownies page component
  // { path: 'brownies', component: BrowniesComponent, title: 'Brownies' },

  { path: '**', redirectTo: '' }
];
