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
import { RouterModule } from '@angular/router';

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
    RouterModule,
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
  { 
    id: 1, 
    name: 'Chocolate Chunk Delight', 
    short: 'Rich dark chocolate chunks', 
    price: 3.75, 
    flavor: 'Chocolate', 
    delivery: true, 
    popularity: 95, 
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfrJx0tWaBAzLour74tDY_cSDSNTOChFmo2Al1bXqOhb9qbyu523_qL-AyyXaaep6UrmDPiVIhr6MerlCZgFvlj5H3cl6_nQ0RTBq0_82i3Pzpqsgza5AnP_dJh6g4MzZ8Q93uwEk72P6ivzrhvyEGNZCZ61IURRVVGjyGnx1BusRnFgn7O_RuSmD3nqRSD35vY9Rs6O-7M7wC7JyMhIIGH1QUZVjBwe9fgEkTgaaCi1Pm63-79tq9n27yPyixBXwzX1vwOveER_c' 
  },
  { 
    id: 2, 
    name: 'Raspberry White Chocolate', 
    short: 'Tart raspberry & white choc', 
    price: 4.10, 
    flavor: 'Fruity', 
    delivery: true, 
    popularity: 88, 
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnKQ0VEvaqiUnlX91zNdZ2wZoq0klBTTRq0aqyfibCtlHI9HGjX7p2hXMhsswN2vgz_gtptM62Gr-DDldI9VXjXnNvtxqKdePjO_VoygS6LYSx8CzQMaNwov3MFoQcTWJQP3y12Va_3Gfea2E1645mcdc4TjvoCfm9EvGQdaMGM9cOPfrXi4hcivac1y0qguJUv6HZZIqEujYi0sICGd_wZNIzas6rrxX53P6MvUlHMTEemMXG_uk0jKsXxxoWcO2nL_uPVIHYRuU' 
  },
  { 
    id: 3, 
    name: 'Salted Caramel Pecan', 
    short: 'Caramel & roasted pecans', 
    price: 4.50, 
    flavor: 'Caramel', 
    delivery: true, 
    popularity: 92, 
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMOWb9yDLck7b5Q6_TxOil2ILYw_PD3JZoGJfkmhED4xLsnBDgJOZASnzeWQjsRLKBRcAtiCXEefEGrhXU8m7_KwvU3sI3lEGlFEf19apNlg8OSC2ga2-laeLzWIibbeyMVUT05A9Kig7g97EzYZHeFkPMh5rOYqp7SqH9eiqQW2UrlohebtIA-c3XoW5X8sgvVqcIXYili2_ef6rQ_LLBgCwN3Dgqh7vP-Fe3EQvEkV6NLfrpkZDiPslQH-7BdnwJRKLshiYjBRo' 
  },
  { 
    id: 4, 
    name: 'Oatmeal Raisin Spice', 
    short: 'Warm spice & hearty oats', 
    price: 3.25, 
    flavor: 'Oatmeal', 
    delivery: false, 
    popularity: 70, 
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBa47T_wSP8e8Zx1frPTlfemySki63wIEuA7jg7dPJ4zeTHybw2Badk2T7hmj2tNbVL1ZkCP0OJh9n94dk_QTsKZXP8IlnEkSz7_o802rxqkEzl9ynFjqjfTYe4g-s4d_RPXK3MA80vQf0pPivICNmt8_yrhDua6mci2L6MJaDcccNgeBy_dzRaYsudW7fFV9x92V_m1nIOryGY3BHkBAA2H5jPVNe53-wxsdFxTngL_54uiuWurUM3G3YOK4QhPklUi4OF3Qm1jJQ' 
  },
  { 
    id: 5, 
    name: 'Double Fudge Brownie', 
    short: 'Dense double-fudge', 
    price: 4.75, 
    flavor: 'Chocolate', 
    delivery: true, 
    popularity: 98, 
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDT7wXOmJHwyxGit0w-eVh_2v3LGLT7GejCM9G4ZdRzTo2fjLE7OjBeRcv1dJpuqys0kzyzl4QxOJrnud3Kv-RI-2MFaj1_10TuXAnY3VtU0_cjUmPPkuy2d9EidX6NKhFuedODIfX65JHFIJsu52Xn3Ay15XbOLgjRoKb8JQxbc96i0ZO33WqysxQGTen7FLb6PPPPqWXKpNqimOA2ZyNCqfwEsSS6vtJlW71XpRjUB0QCoTBT8JEzdoX0y9aS1SXyO7CaIVtQqzA' 
  },
  { 
    id: 6, 
    name: 'Lemon Zest Shortbread', 
    short: 'Citrus shortbread', 
    price: 3.40, 
    flavor: 'Citrus', 
    delivery: false, 
    popularity: 65, 
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOnLck-jP8HbabxUuKbe8un21M9OT8SNl3GXlIhqjVMSiwbYsMo2GVejI0Iwo5ZpwNal3P26ocBeLzJWkqXV3D7e6RTNlY0U7xTv5MjKMU-wXLvCdz1tk2zza68OUsVCLy90xmGzm2ESCccEfglzjqUSYzplvJMhlpyMt3poNyUjsO9-BNkBm52YlQpwmYBKUYnC0ywLxuXIlsJNVDFmbJVpybpV3eF179OXGZcBai9BhnkfM2mNfjXCyycGF_dEOCcd2_wMYjCcw' 
  },
  { 
    id: 7, 
    name: 'Matcha Green Tea', 
    short: 'Subtle matcha flavor', 
    price: 3.95, 
    flavor: 'Green Tea', 
    delivery: true, 
    popularity: 76, 
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDm0gE9H_twJ1OU6bwITvAOMBunbBVOTFfzPaqlDGc7m1Mo0zRVP8pWCbHL8BCjmNY9GBGE3sfLj2Wqv_FE4zyI7Acn9p5u_GV8jYeLI1IHBXt_qVbwR9F5O7nNQfBt7u_jl7zGjh3WRXNzuifUcahD4Dv69aM0z-Pj3kihvF_tLJFFXEAJeyyslWVlNEhAlr_NSoeejmR5lMa7zRP9bM_e0VReHbFkXnNCWmMuAIk_7_4qg_63fdFNXFgfooZ0w-aHkh8nZ8lExYo' 
  },
  { 
    id: 8, 
    name: 'Almond Biscotti Crisp', 
    short: 'Crunchy almond biscotti', 
    price: 3.60, 
    flavor: 'Almond', 
    delivery: false, 
    popularity: 60, 
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcWRPuUYqgICn6X0cJ6fDNdL0P343Awfk-5w6eCqRa2bXjSWtDBbu2d5jqk-SHhkTl_xjqSiy8wMKuxD1LnEYWqQFFfTX9DuF2iHvMYYh4iBA1sx4UzPVBfoK1pkHwcdTpC6qd19HfBCB9uGHaCohNIZC_HO1teueudWTadCTyMbmdgh-C5do35Z1YgYnMofsJXSXPUyMJtdAgWJPZ3HAVo89hyiOi39RzkDv2-DmsCOVuyDDj3llkAL28L1mmw_i3DsA4ApUqI_M' 
  }
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
