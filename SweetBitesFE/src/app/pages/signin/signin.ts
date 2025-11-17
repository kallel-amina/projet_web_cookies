import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-signin',
  standalone: true,
  templateUrl: './signin.html',
  styleUrls: ['./signin.css'],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SigninComponent {
  email: string = '';
  password: string = '';
  hidePassword: boolean = true;

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  login() {
    alert(`Logging in with ${this.email}`);
    // Add actual login logic here
  }
}
