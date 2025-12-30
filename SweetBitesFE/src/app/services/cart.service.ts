import { Injectable } from '@angular/core';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];

  getCart() {
    return this.items;
  }

  addToCart(product: any) {
    const existing = this.items.find(item => item.id === product.id);

    if (existing) {
      existing.quantity++;
    } else {
      this.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        quantity: 1
      });
    }
  }

  removeFromCart(id: number) {
    this.items = this.items.filter(item => item.id !== id);
  }

  clearCart() {
    this.items = [];
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}
