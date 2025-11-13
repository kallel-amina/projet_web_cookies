import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/* Angular Material imports */
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

interface Product {
  id: number;
  name: string;
  short: string;
  price: number;
  flavor: string;
  delivery: boolean;
  popularity: number;
  image: string;
}

@Component({
  selector: 'app-cookies',
  standalone: true,
  templateUrl: './cookies.html',
  styleUrls: ['./cookies.css'],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatPaginatorModule,
    MatCardModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class CookiesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  products: Product[] = [
    { id:1, name:'Chocolate Chunk Delight', short:'Rich dark chocolate chunks', price:3.75, flavor:'Chocolate', delivery:true, popularity:95, image:'/assets/images/cookies_page/chocolatechunk.png' },
    { id:2, name:'Raspberry White Chocolate', short:'Tart raspberry & white choc', price:4.10, flavor:'Fruity', delivery:true, popularity:88, image:'/assets/images/cookies_page/fromboise.png' },
    { id:3, name:'Salted Caramel Pecan', short:'Caramel & roasted pecans', price:4.50, flavor:'Caramel', delivery:true, popularity:92, image:'/assets/images/cookies_page/saltedcaramel.png' },
    { id:4, name:'Oatmeal Raisin Spice', short:'Warm spice & hearty oats', price:3.25, flavor:'Oatmeal', delivery:false, popularity:70, image:'/assets/images/cookies_page/oats.png' },
    { id:5, name:'Double Fudge Brownie', short:'Dense double-fudge', price:4.75, flavor:'Chocolate', delivery:true, popularity:98, image:'/assets/images/cookies_page/fudge.png' },
    { id:6, name:'Lemon Zest Shortbread', short:'Citrus shortbread', price:3.40, flavor:'Citrus', delivery:false, popularity:65, image:'/assets/images/cookies_page/zest.png' },
    { id:7, name:'Matcha Green Tea', short:'Subtle matcha flavor', price:3.95, flavor:'Green Tea', delivery:true, popularity:76, image:'/assets/images/cookies_page/matcha.png' },
    { id:8, name:'Almond Biscotti Crisp', short:'Crunchy almond biscotti', price:3.60, flavor:'Almond', delivery:false, popularity:60, image:'/assets/images/cookies_page/almond' },
  
  ];

  flavors: string[] = [];
  selectedFlavor: string = '';
  deliveryOnly: boolean = false;
  sortBy: string = 'popularity';

  filteredProducts: Product[] = [];
  displayedProducts: Product[] = [];

  pageSize = 8;
  pageIndex = 0;

  ngOnInit(): void {
    this.flavors = Array.from(new Set(this.products.map(p => p.flavor))).sort();
    this.filteredProducts = [...this.products];
    this.applyFilters();
  }

  applyFilters() {
    let list = this.products.slice();

    if (this.selectedFlavor) {
      list = list.filter(p => p.flavor === this.selectedFlavor);
    }
    if (this.deliveryOnly) {
      list = list.filter(p => p.delivery);
    }

    switch (this.sortBy) {
      case 'price-asc': list.sort((a, b) => a.price - b.price); break;
      case 'price-desc': list.sort((a, b) => b.price - a.price); break;
      default: list.sort((a, b) => b.popularity - a.popularity); break;
    }

    this.filteredProducts = list;
    this.pageIndex = 0;
    this.updatePage();
    if (this.paginator) this.paginator.firstPage();
  }

  updatePage() {
    const start = this.pageIndex * this.pageSize;
    this.displayedProducts = this.filteredProducts.slice(start, start + this.pageSize);
  }

  pageChanged(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePage();
  }

  addToCart(product: Product) {
    alert(`Added "${product.name}" to cart — $${product.price.toFixed(2)}`);
  }
}
