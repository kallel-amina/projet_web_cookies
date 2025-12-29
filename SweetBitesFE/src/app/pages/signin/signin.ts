import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../services/auth.service';

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

  constructor(private authService: AuthService, private router: Router) {}

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  login() {
    const data = { email: this.email, password: this.password };
    this.authService.login(data).subscribe({
      next: (res) => {
        alert('Login successful!');
        // Save token if your backend returns one
        localStorage.setItem('token', res.token);
        this.router.navigate(['/home']); // redirect to home page
      },
      error: (err) => {
        alert('Login failed: ' + err.error.message || err.message);
      }
    });
  }
}
