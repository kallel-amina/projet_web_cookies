import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class SignupComponent {
  fullName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  showPassword = false;

  constructor(private authService: AuthService, private router: Router) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  submitForm() {
    if (this.password !== this.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const data = {
      name: this.fullName,
      email: this.email,
      password: this.password
    };

    this.authService.signup(data).subscribe({
      next: (res) => {
        alert('Signup successful!');
        this.router.navigate(['/login']); // redirect to login
      },
      error: (err) => {
        alert('Signup failed: ' + err.error.message || err.message);
      }
    });
  }
}
