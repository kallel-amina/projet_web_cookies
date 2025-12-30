import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html'
})
export class CartComponent {
  cart: CartItem[] = [];

  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCart();
  }

  remove(id: number) {
    this.cartService.removeFromCart(id);
    this.cart = this.cartService.getCart();
  }

  total() {
    return this.cartService.getTotal();
  }
}
