import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AdminService } from '../../services/admin.service';
import { Product, ProductPayload, ProductStateService } from '../../services/product-state.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  productPages: string[] = ['cookies', 'tiramisu', 'brownies'];
  dietaryTags: string[] = ['none', 'protein', 'healthy', 'sugar-free'];

  productForm: ProductPayload = {
    name: '',
    description: '',
    price: 0,
    stock: 0,
    active: true,
    category: '',
    imageUrl: '',
    imageAlt: ''
  };

  updateProductId: string = '';

  deliveryCreateOrderId: number | null = null;
  deliveryUpdateId: string = '';
  deliveryUpdateStatus = 'OUT_FOR_DELIVERY';
  deliveryFilterStatus = '';

  deliveries: any[] = [];

  products: Product[] = [];
  productsLoading = false;
  productsError: string | null = null;

  selectedProductPage = 'cookies';
  selectedDietaryTag = 'none';

  constructor(
    private adminService: AdminService,
    private productStateService: ProductStateService
  ) {
    this.productStateService.adminProducts$.subscribe((products) => {
      this.products = products;
    });

    this.productStateService.adminLoading$.subscribe((loading) => {
      this.productsLoading = loading;
    });

    this.productStateService.adminError$.subscribe((error) => {
      this.productsError = error;
    });

    this.productStateService.loadAdminProducts();
  }

  createProduct(): void {
    this.productStateService.createProduct(this.buildProductPayload()).subscribe({
      next: () => {
        alert('Product created successfully');
        this.resetProductForm();
      },
      error: (err: HttpErrorResponse) => alert(err?.error?.message || 'Failed to create product')
    });
  }

  updateProduct(): void {
    if (!this.updateProductId?.trim()) {
      alert('Enter product ID to update');
      return;
    }

    this.productStateService.updateProduct(this.updateProductId.trim(), this.buildProductPayload()).subscribe({
      next: () => alert('Product updated successfully'),
      error: (err: HttpErrorResponse) => alert(err?.error?.message || 'Failed to update product')
    });
  }

  deleteProduct(id: string): void {
    if (!confirm('Delete this product?')) {
      return;
    }

    this.productStateService.deleteProduct(id).subscribe({
      next: () => alert('Product deleted successfully'),
      error: (err: HttpErrorResponse) => alert(err?.error?.message || 'Failed to delete product')
    });
  }

  loadProducts(): void {
    this.productStateService.loadAdminProducts();
  }

  useProduct(product: Product): void {
    this.setCategorySelections(product.category || '');

    this.updateProductId = product.id;
    this.productForm = {
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock,
      active: product.active,
      category: this.buildCategoryValue(),
      imageUrl: product.imageUrl || '',
      imageAlt: product.imageAlt || ''
    };
  }

  createDelivery(): void {
    if (!this.deliveryCreateOrderId) {
      alert('Enter order ID');
      return;
    }

    this.adminService.createDelivery(this.deliveryCreateOrderId).subscribe({
      next: () => {
        alert('Delivery created');
        this.loadDeliveries();
      },
      error: (err: HttpErrorResponse) => alert(err?.error?.message || 'Failed to create delivery')
    });
  }

  updateDeliveryStatus(): void {
    if (!this.deliveryUpdateId?.trim()) {
      alert('Enter delivery ID');
      return;
    }

    this.adminService.updateDeliveryStatus(this.deliveryUpdateId.trim(), this.deliveryUpdateStatus).subscribe({
      next: () => {
        alert('Delivery status updated');
        this.loadDeliveries();
      },
      error: (err: HttpErrorResponse) => alert(err?.error?.message || 'Failed to update delivery status')
    });
  }

  loadDeliveries(): void {
    const status = this.deliveryFilterStatus || undefined;
    this.adminService.getDeliveries(status).subscribe({
      next: (data: any[]) => {
        this.deliveries = data || [];
      },
      error: (err: HttpErrorResponse) => alert(err?.error?.message || 'Failed to load deliveries')
    });
  }

  private resetProductForm(): void {
    this.productForm = {
      name: '',
      description: '',
      price: 0,
      stock: 0,
      active: true,
      category: 'cookies',
      imageUrl: '',
      imageAlt: ''
    };
    this.selectedProductPage = 'cookies';
    this.selectedDietaryTag = 'none';
    this.updateProductId = '';
  }

  private buildProductPayload(): ProductPayload {
    return {
      ...this.productForm,
      category: this.buildCategoryValue()
    };
  }

  private buildCategoryValue(): string {
    return this.selectedDietaryTag === 'none'
      ? this.selectedProductPage
      : `${this.selectedProductPage}:${this.selectedDietaryTag}`;
  }

  private setCategorySelections(category: string): void {
    const parts = (category || '').split(':');
    const page = parts[0]?.trim().toLowerCase();
    const tag = parts[1]?.trim().toLowerCase();

    this.selectedProductPage = this.productPages.includes(page) ? page : 'cookies';
    this.selectedDietaryTag = this.dietaryTags.includes(tag) ? tag : 'none';
  }
}
