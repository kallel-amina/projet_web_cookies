import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { TiramisuComponent } from './pages/tiramisu/tiramisu';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { SignupComponent } from './pages/signup/signup';
import { SigninComponent } from './pages/signin/signin';
import { ProfileComponent } from './pages/profile/profile';
import { brownies } from './pages/brownies/brownies';
import { OurStory } from './our-story/our-story';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Sweet Bites — Home' },



  { path: 'brownies', component: brownies, title: 'Brownies' },
  { path: 'tiramisu', component: TiramisuComponent, title: 'Tiramisu Collection' },
  { path: 'cookies', component: CookiesComponent, title: 'Cookies' },

  { path: 'our-story', component: OurStory, title: 'Our Story' },
  { path: 'contact', component: ContactComponent, title: 'Contact Us' },

  { path: 'signin', component: SigninComponent, title: 'Sign In' },
  { path: 'signup', component: SignupComponent, title: 'Sign Up' },
  { path: 'login', component: SigninComponent },
  { path: 'profile', component: ProfileComponent, title: 'Profile' },

  { path: '**', redirectTo: '' }
];
