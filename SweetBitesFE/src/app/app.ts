import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { TiramisuComponent } from './pages/tiramisu/tiramisu';
import{ CookiesComponent } from './pages/cookies/cookies.component';  
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [ HomeComponent, TiramisuComponent , RouterOutlet, CookiesComponent, Header, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected title = 'SweetBitesFE';
}
