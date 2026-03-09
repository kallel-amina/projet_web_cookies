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
  phone: string = '';
  address: string = '';
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
      fullName: this.fullName,
      email: this.email,
      password: this.password,
      phone: this.phone,
      address: this.address
    };

    this.authService.signup(data).subscribe({
      next: (res) => {
        alert('Signup successful!');
        this.authService.setSession(res.token, res.role);
        this.router.navigate(['/']);
      },
      error: (err) => {
        alert('Signup failed: ' + err.error.message || err.message);
      }
    });
  }
}
