import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.html',
  styleUrls: ['./signup.css'],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class SignupComponent {
  showPassword: boolean = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  submitForm() {
    alert('Sign up submitted! Implement backend integration here.');
  }
}
