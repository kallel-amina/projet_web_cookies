import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  productForm = {
    name: '',
    description: '',
    price: 0,
    stock: 0,
    active: true
  };

  updateProductId: string = '';

  deliveryCreateOrderId: number | null = null;
  deliveryUpdateId: string = '';
  deliveryUpdateStatus = 'OUT_FOR_DELIVERY';
  deliveryFilterStatus = '';

  deliveries: any[] = [];

  constructor(private adminService: AdminService) {}

  createProduct(): void {
    this.adminService.createProduct(this.productForm).subscribe({
      next: () => alert('Product created successfully'),
      error: (err: HttpErrorResponse) => alert(err?.error?.message || 'Failed to create product')
    });
  }

  updateProduct(): void {
    if (!this.updateProductId?.trim()) {
      alert('Enter product ID to update');
      return;
    }

    this.adminService.updateProduct(this.updateProductId.trim(), this.productForm).subscribe({
      next: () => alert('Product updated successfully'),
      error: (err: HttpErrorResponse) => alert(err?.error?.message || 'Failed to update product')
    });
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
}
