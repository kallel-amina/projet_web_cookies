import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    // Here you can call your backend API
    console.log('Login form submitted:', { email: this.email, password: this.password });
    // Example: use HttpClient to POST to your Node.js backend
  }
}
