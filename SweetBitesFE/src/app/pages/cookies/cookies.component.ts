import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Product, ProductStateService } from '../../services/product-state.service';

export type CookieProduct = Product;

@Component({
  selector: 'app-cookies',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cookies.html',
  styleUrls: ['./cookies.css'],
})
export class CookiesComponent {
  products: CookieProduct[] = [];

  filteredProducts: CookieProduct[] = [];
  selectedFilter: string | null = null;
  loading = false;
  error: string | null = null;
  private searchQuery = '';

  constructor(
    private cartService: CartService,
    private productStateService: ProductStateService
  ) {
    this.productStateService.publicProducts$.subscribe((products) => {
      this.products = this.extractPageProducts(products);
      this.applyFilters();
    });

    this.productStateService.publicLoading$.subscribe((loading) => {
      this.loading = loading;
    });

    this.productStateService.publicError$.subscribe((error) => {
      this.error = error;
    });

    this.productStateService.loadPublicProducts();
  }

 filterByCategory(category: string): void {
  if (category === 'all') {
    this.selectedFilter = null;
  } else if (this.selectedFilter === category) {
    this.selectedFilter = null;
  } else {
    this.selectedFilter = category;
  }

  this.applyFilters();
}

showAdded = false;

addToCart(product: CookieProduct) {
  this.cartService.addToCart(product);
  this.showAdded = true;

  setTimeout(() => {
    this.showAdded = false;
  }, 1200);
}


  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery = input.value.toLowerCase();
    this.applyFilters();
  }

  private applyFilters(): void {
    let next = [...this.products];

    if (this.selectedFilter) {
      next = next.filter((product) => {
        const normalizedCategory = (product.category || '').toLowerCase();
        const categoryParts = normalizedCategory.split(':');
        const dietaryTag = categoryParts[1]?.trim() || '';
        return dietaryTag === this.selectedFilter;
      });
    }

    if (this.searchQuery) {
      next = next.filter(p =>
        p.name.toLowerCase().includes(this.searchQuery) ||
        p.description.toLowerCase().includes(this.searchQuery)
      );
    }

    this.filteredProducts = next;
  }

  private extractPageProducts(products: Product[]): CookieProduct[] {
    return products.filter((product) => {
      const normalizedCategory = (product.category || '').toLowerCase();
      const pageCategory = normalizedCategory.split(':')[0].trim();

      if (pageCategory) {
        return pageCategory === 'cookies';
      }

      const searchableText = `${product.name} ${product.description}`.toLowerCase();
      return searchableText.includes('cookie');
    });
  }

  getDietaryTag(product: CookieProduct): string | null {
    const normalizedCategory = (product.category || '').toLowerCase();
    const dietaryTag = normalizedCategory.split(':')[1]?.trim();

    if (!dietaryTag) {
      return null;
    }

    if (dietaryTag === 'sugar-free') {
      return 'Sugar-Free';
    }

    return dietaryTag.charAt(0).toUpperCase() + dietaryTag.slice(1);
  }
}
