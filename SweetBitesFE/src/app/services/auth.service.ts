import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/auth';
  private tokenKey = 'token';
  private roleKey = 'role';

  constructor(private http: HttpClient) {}

  signup(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  setSession(token: string, role: string): void {
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.roleKey, role);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.roleKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getRole(): string | null {
    return localStorage.getItem(this.roleKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  isAdmin(): boolean {
    return this.getRole() === 'ROLE_ADMIN';
  }

  getProfile(): Observable<any> {
    const token = this.getToken();
    return this.http.get(`http://localhost:8080/api/auth/me`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }
}
