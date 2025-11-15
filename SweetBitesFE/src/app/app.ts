import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { TiramisuComponent } from './pages/tiramisu/tiramisu';
import{ CookiesComponent } from './pages/cookies/cookies';  
import { Header } from './header/header';
import { LoginComponent } from './pages/login/login';
import { SignupComponent } from './pages/signup/signup';

@Component({
  selector: 'app-root',
  imports: [ HomeComponent, TiramisuComponent , RouterOutlet, CookiesComponent, Header, RouterModule , LoginComponent,
    SignupComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected title = 'SweetBitesFE';
}

