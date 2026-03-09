import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private apiUrl = 'http://localhost:8080/api/contact';

  constructor(private http: HttpClient) {}

  sendMessage(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}
