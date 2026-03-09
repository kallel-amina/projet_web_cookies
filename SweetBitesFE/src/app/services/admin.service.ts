import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AdminService {
  private baseUrl = 'http://localhost:8080/api/admin';

  constructor(private http: HttpClient, private authService: AuthService) {}

  private authHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  createProduct(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/products`, data, { headers: this.authHeaders() });
  }

  updateProduct(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/products/${id}`, data, { headers: this.authHeaders() });
  }

  getDeliveries(status?: string): Observable<any> {
    const query = status ? `?status=${status}` : '';
    return this.http.get(`${this.baseUrl}/deliveries${query}`, { headers: this.authHeaders() });
  }

  createDelivery(orderId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/deliveries?orderId=${orderId}`, {}, { headers: this.authHeaders() });
  }

  updateDeliveryStatus(id: string, status: string): Observable<any> {
    return this.http.patch(`${this.baseUrl}/deliveries/${id}/status`, { status }, { headers: this.authHeaders() });
  }
}
