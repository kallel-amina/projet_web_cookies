import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, finalize, tap } from 'rxjs';
import { AuthService } from './auth.service';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  active: boolean;
  category?: string;
  imageUrl: string;
  imageAlt: string;
}

export interface ProductPayload {
  name: string;
  description: string;
  price: number;
  stock: number;
  active: boolean;
  category?: string;
  imageUrl?: string;
  imageAlt?: string;
}

@Injectable({ providedIn: 'root' })
export class ProductStateService {
  private apiBaseUrl = 'http://localhost:8080/api';

  private publicProductsSubject = new BehaviorSubject<Product[]>([]);
  private adminProductsSubject = new BehaviorSubject<Product[]>([]);

  private publicLoadingSubject = new BehaviorSubject<boolean>(false);
  private adminLoadingSubject = new BehaviorSubject<boolean>(false);

  private publicErrorSubject = new BehaviorSubject<string | null>(null);
  private adminErrorSubject = new BehaviorSubject<string | null>(null);

  publicProducts$ = this.publicProductsSubject.asObservable();
  adminProducts$ = this.adminProductsSubject.asObservable();

  publicLoading$ = this.publicLoadingSubject.asObservable();
  adminLoading$ = this.adminLoadingSubject.asObservable();

  publicError$ = this.publicErrorSubject.asObservable();
  adminError$ = this.adminErrorSubject.asObservable();

  constructor(private http: HttpClient, private authService: AuthService) {}

  private authHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  loadPublicProducts(): void {
    this.publicLoadingSubject.next(true);
    this.publicErrorSubject.next(null);

    this.http.get<Product[]>(`${this.apiBaseUrl}/products`)
      .pipe(finalize(() => this.publicLoadingSubject.next(false)))
      .subscribe({
        next: (products) => this.publicProductsSubject.next(this.normalizeProducts(products)),
        error: (error: { error?: { message?: string } }) => {
          this.publicErrorSubject.next(error?.error?.message || 'Failed to load products');
          this.publicProductsSubject.next([]);
        }
      });
  }

  loadAdminProducts(): void {
    this.adminLoadingSubject.next(true);
    this.adminErrorSubject.next(null);

    this.http.get<Product[]>(`${this.apiBaseUrl}/admin/products`, { headers: this.authHeaders() })
      .pipe(finalize(() => this.adminLoadingSubject.next(false)))
      .subscribe({
        next: (products) => this.adminProductsSubject.next(this.normalizeProducts(products)),
        error: (error: { error?: { message?: string } }) => {
          this.adminErrorSubject.next(error?.error?.message || 'Failed to load admin products');
          this.adminProductsSubject.next([]);
        }
      });
  }

  createProduct(data: ProductPayload): Observable<Product> {
    return this.http.post<Product>(`${this.apiBaseUrl}/admin/products`, data, { headers: this.authHeaders() })
      .pipe(tap(() => this.refreshProducts()));
  }

  updateProduct(id: string, data: ProductPayload): Observable<Product> {
    return this.http.put<Product>(`${this.apiBaseUrl}/admin/products/${id}`, data, { headers: this.authHeaders() })
      .pipe(tap(() => this.refreshProducts()));
  }

  deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiBaseUrl}/admin/products/${id}`, { headers: this.authHeaders() })
      .pipe(tap(() => this.refreshProducts()));
  }

  refreshProducts(): void {
    this.loadPublicProducts();
    if (this.authService.isAdmin()) {
      this.loadAdminProducts();
    }
  }

  private normalizeProducts(products: Product[] = []): Product[] {
    return products.map((product) => ({
      ...product,
      id: String(product.id),
      description: product.description || '',
      category: product.category || 'uncategorized',
      imageAlt: product.imageAlt || product.name,
      imageUrl: product.imageUrl || 'https://images.unsplash.com/photo-1559622214-0f2f24f5d7f0?auto=format&fit=crop&w=900&q=80'
    }));
  }
}
