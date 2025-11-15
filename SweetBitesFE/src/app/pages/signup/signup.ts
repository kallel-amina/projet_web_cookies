import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  fullName = '';
  email = '';
  password = '';
  confirmPassword = '';
  message = '';

  constructor(private http: HttpClient) {}

  signup() {
    if (!this.fullName || !this.email || !this.password || !this.confirmPassword) {
      this.message = 'Please fill in all fields';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.message = 'Passwords do not match';
      return;
    }

    this.http.post<any>('http://localhost:3000/api/signup', {
      fullName: this.fullName,
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res) => {
        this.message = res.message;
        if (res.success) {
          // optionally redirect to login page
          this.fullName = '';
          this.email = '';
          this.password = '';
          this.confirmPassword = '';
        }
      },
      error: (err) => {
        this.message = err.error.message || 'Server error';
      }
    });
  }
}
