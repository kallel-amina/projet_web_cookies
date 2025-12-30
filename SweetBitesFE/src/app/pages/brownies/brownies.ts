import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';

export interface brownie {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  imageAlt: string;
  category: string;
}

@Component({
  selector: 'app-brownies',
  standalone: true,
  imports: [CommonModule , RouterModule],          
  templateUrl: './brownies.html',
  styleUrls: ['./brownies.css'],
})
export class brownies {
  products: brownie[] = [
    { id: 1, name: 'Classic Fudge Brownie', description: 'Espresso & Mascarpone', price: 4.50,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5lELSmmqAoc2VIAnPgjrTU2YsrJHF_Flpgwx_EzrZNGdNd2ZnWYbxBYvbH7P3Wi5zDux6feV2p-rG2vYacBF6RIXpoxze-Ks6HGSIXaB-QXnoGXYnAYIGEa1v00Nsfn5x8vNGsERcfGRDLp31nHI9jp2o2HpxP7jhMyiZTFGjRCWDkotXqDHLICUIM5aCtvp2cPR8xUWAZ8E2YwygAp4hPK0VWcktRqLi_Qfh5yzwTMxbKqglxA4IkoEUF8ycoNxop_MbXpW6apc',
      imageAlt: 'A slice of classic Fudge Brownie on a white plate', category: 'classic' },

    { id: 2, name: 'Salted Caramel Brownie', description: 'Sweet & Salty Caramel', price: 5.00,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfGMccOxSMEPjI1anmop0LowEKRtYId1Yxb0i38w7B7lFapOAkOeOqBKyQkB1y8cp9-D7h9zAJ4QZ8aPY_7e_P44XcZeJ-hh7Mt3ocf51z6iMG5xM4GBrpezARPHjsi8Rt0lUw_XsMITEps2Za-TnmMfgJVfg-ijU3o8QPEjxb5KN4Apcg50c4yqpSaTHXofnrSkiOZQFBIf6kuBfPo1PRwOXLhlvaSnyDGDotchN6LfnbKCaypGA8h1Dcsi2xcyhL8MmE_ZAbSuE',
      imageAlt: 'A caramel tiramisu drizzled with rich caramel sauce', category: 'liqueur-free' },

    { id: 3, name: 'Triple Chocolate Chunk', description: 'Rich Chocolate & Nut', price: 5.50,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQFR-Qsq03K2_L-7yXrKYWgp_BPyOyhpbeejoTkK3GadjReuCE2vrWCT1NaD-E7WuYgtjtubkqoCqawK_GfWuPUtntnAxeJy39SE2yeLdCaJBGFlKgdPAtD6esCfppH-vKJK5yLT26PtqYEGXdRAkMPJb6QCEK6fE1Wh5P2ZCTXSo6BuybZjbgh1nktbvXhNtaV6Y18wNeGiNowM2GYYHNe5Zt2UbkrhtAvzAB3INQxFfKklmQqMH_dRlWVzSnaa5Ni35wtVel54M',
      imageAlt: 'A rich chocolate hazelnut tiramisu topped with chopped hazelnuts', category: 'classic' },

    { id: 4, name: 'Walnut Wonder Brownie', description: 'Walnut Wonder Infusion', price: 5.00,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcFY9qVMEhJWWFqvuYzsqCkdXZvSmDYSAMT-Ao0WQwjTY04KEvDjvc_Ew2ebOYHka0wZJUzK8Nor3VLA6uUlLw5uQQflIv0EFqapZRbbCdWZlZfBMMqPKubEvgaNKcwWE7fJNCiGlirQTBPJs8KasBkPqvErf_vdlOaVTqG06NO7k85-ALZl9faOhP61m_A9rp4lT68nLG8nuHxTV0gEujCufJsu1hXAQzfUMA8bV1ey74Fy0HXxgBI_ddHnFhh4GwpUzsPABAa60',
      imageAlt: 'A bright and zesty lemon tiramisu with lemon slices', category: 'liqueur-free' },
    
    { id: 5, name: 'Peanut Butter Swirl', description: 'Tangy Peanut Butter Twist', price: 5.25,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCULfXYtfQBDl8QcqnRDlHk2Zt66zeHCNo9EaKLoJr_DAGTpcU_UxEbx-DqJrCmL5y0_2My3ygxli3dh1jT53LDwzANFewCT6JgK9X768aaEuvdHLpCrrLIrSwpe9EqUeE7GY-FbAv05Ax-xIuvTjse4VvPdQUlWaJchnjVbA2gdqqQkEYlT1C3B-Rc4VomCUdRTqJUbZDRzSCzxkNKJKxskP0eJpkSRoEXpRtSIckfxR2XlzGEOM0aei9ge6GaC1hIkmmE5FeuweM',
      imageAlt: 'A rich peanut butter brownie topped with chopped hazelnuts', category: 'classic' },
    
    { id: 6, name: 'Espresso Kick Brownie', description: 'Espresso & Mascarpone', price: 5.25,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzJ1oqh5p9_w_9WmHgQajhSVd6loilVF_xQh0hlkWakGE21Lb6D6fpW2-IYt7Jzx8MLF6RW1m2gxYpXTnMr-TuC9uCud5WDX2rb5xMKbW5vwnAAMSspzI2pi18jxyYOcJ4cb_yitKxrbxfWRbik6n5rO5j8aTNB6G49-Wo9PvixIV9Yd_E85qktM5StK7IXLgxG88pkagTgfhTBkJr1kLOQUNWZxgGVLsGU9vMHL-YK_43HnKapN_yzNM0rOS4pS_WYIqaiFBVLCQ',
      imageAlt: 'A delicate pistachio tiramisu with green pistachio cream', category: 'classic' },
    
    { id: 7, name: 'Ruby Chocolate Bliss', description: 'Tangy Raspberry Twist', price: 5.75,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVzuIxXdY8VnZAnJ0R8tRUFdKPRzuSDUg0Nx1U3ZdPZzv42OYa0kS7ODJzc-W0lJ0reoBZPOh8GbYHB9n8kE46A_uEjFo2YAaF0xnjSpk62k86NUWtTn46ACcPf1LFLYhTu35CFGQWhHnDYohFV7kFXTlaXk4LBWJoSpKKWn3QqPcclj_2NWVFMGC7k-HRFyNhZb6_nYgFOODFg1SovfDxsMheD2vx7la7Mznjad8MocJ4KX4LJLw59bxlqcKsANpErqKYl07fCXA',
      imageAlt: 'A rich chocolate hazelnut tiramisu topped with chopped hazelnuts', category: 'liqueur-free' },
    
    { id: 8, name: 'Mint Chocolate Delight', description: 'Sweet & Salty Caramel', price: 5.25,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADTuBXVh6KaaLPiOEos3j9kiFXEWQL8m4zQ59ST-jPdT6-yLs5HNtCJegaLQy657pi2JvuPhJIZENCxWDdv402xcWBNkYGq2LIaXsaQ7UEdb7wIs-zOlLak5T5Y_ZJ9EccZzHmFldtNMBe1Ji-btyS-NrEoh8nOvKf9rpEc1N7OcJg-AI7TjTfZFjx5hODDyvNko3NBmtRMjikfqDU_XRwZU9romU3pOIkp7MV1-gaoudNJ2fj09XpCcOujSasLPHuSqgkoY9npsA',
      imageAlt: 'A caramel tiramisu drizzled with rich caramel sauce', category: 'liqueur-free' }
  ];

  filteredProducts: brownie[] = [...this.products];
  selectedFilter: string | null = null;

  filterByCategory(category: string): void {
    if (this.selectedFilter === category) {
      this.selectedFilter = null;
      this.filteredProducts = [...this.products];
    } else {
      this.selectedFilter = category;
      this.filteredProducts = this.products.filter(p => p.category === category);
    }
  }

  constructor(private cartService: CartService) {}

showAdded = false;

addToCart(product: brownie) {
  this.cartService.addToCart(product);
  this.showAdded = true;

  setTimeout(() => {
    this.showAdded = false;
  }, 1200);
}

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    const searchQuery = input.value.toLowerCase();

    if (searchQuery) {
      this.filteredProducts = this.products.filter(p =>
        p.name.toLowerCase().includes(searchQuery) ||
        p.description.toLowerCase().includes(searchQuery)
      );
    } else {
      this.filteredProducts = this.selectedFilter
        ? this.products.filter(p => p.category === this.selectedFilter)
        : [...this.products];
    }
  }



}
