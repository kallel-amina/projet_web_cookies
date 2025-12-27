import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { TiramisuComponent } from './pages/tiramisu/tiramisu';
import { CookiesComponent } from './pages/cookies/cookies.component';

import { SignupComponent } from './pages/signup/signup';
import { SigninComponent } from './pages/signin/signin';
import { ProfileComponent } from './pages/profile/profile';

import { brownies } from './pages/brownies/brownies';
import { OurStory } from './our-story/our-story';
import { PrivacyPolicy } from './privacy-policy/privacy-policy';
import { TermsOfService } from './terms-of-service/terms-of-service';
import { Notifications } from './notifications/notifications';

import { ContactComponent } from './pages/contact/contact.component';



export const routes: Routes = [
  {path: 'notifications', component: Notifications, title: 'Notifications'},
  { path: 'terms-of-service', component: TermsOfService, title: 'Terms of Service' },
  { path: 'privacy-policy', component: PrivacyPolicy, title: 'Privacy Policy' },
  {path: 'our-story', component: OurStory, title: 'Our Story'},
  { path: '', component: HomeComponent, title: 'Sweet Bites — Home' },
  { path: 'contact', component: ContactComponent , title: 'Contact Us' },
  { path: 'cookies', component: CookiesComponent, title: 'Cookies' },

  { path: 'tiramisu', component: TiramisuComponent, title: 'Tiramisu Collection' },
  {path:'signin', component: SigninComponent, title:'Sign In'},

  { path: 'signup', component: SignupComponent , title : 'Signup'  },


  { path: 'login', component: SigninComponent },

  { path: 'profile', component: ProfileComponent, title: 'profile' },

  
   { path: 'brownies', component: brownies , title: 'Brownies' },

  { path: '**', redirectTo: '' }
  
  
];
