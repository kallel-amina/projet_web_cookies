import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CookiesComponent } from './pages/cookies/cookies.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,CookiesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'SweetBitesFE';
}
