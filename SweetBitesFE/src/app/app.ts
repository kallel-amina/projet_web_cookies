import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { TiramisuComponent } from './pages/tiramisu/tiramisu';
import{ CookiesComponent } from './pages/cookies/cookies.component';  

import { Header } from './header/header';

import { SigninComponent } from './pages/signin/signin';
import { SignupComponent } from './pages/signup/signup';
import { HttpClientModule } from '@angular/common/http';
import { Footer } from './footer/footer';
import { BrowniesComponent } from './pages/brownies/brownies';

@Component({
  selector: 'app-root',
  imports: [ HomeComponent, TiramisuComponent , RouterOutlet, CookiesComponent  , Header, RouterModule , SigninComponent,
    SignupComponent , HttpClientModule, Footer  , BrowniesComponent ],

  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected title = 'SweetBitesFE';
}
