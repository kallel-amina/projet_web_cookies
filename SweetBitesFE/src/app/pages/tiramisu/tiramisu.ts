import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface TiramisuProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  imageAlt: string;
  category: string;
}

@Component({
  selector: 'app-tiramisu',
  standalone: true,
  imports: [CommonModule , RouterModule],              // <-- Needed for *ngFor, ngClass, etc.
  templateUrl: './tiramisu.html',
  styleUrls: ['./tiramisu.css'],
})
export class TiramisuComponent {
  products: TiramisuProduct[] = [
    { id: 1, name: 'Classic Italian Tiramisu', description: 'Espresso & Mascarpone', price: 12.00,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNxY7WwvCSMUFfur-re7K-GIXXKoDw9rreojJWShaF8ghGT9crube9LV3fdj57-Pmhjp6MAtOCQBcHJ0InG6jvMYVu_tWsb6DAXprZl5Gs-aWYmu2smTKQq56nO7oXiQm1a9ltDQgbWkxj4JhQWPjKKRtT7otS-J-E-QAIpM3fxG9AUOXxnA1wD8hc_l-IDNl2zsbeTWbyYBjplZexG3ib58DAsUxxBZ7AfMd3PNSwEACVIT7Z_DfYkK58GY5nf4ez9FjQc7qgzOE',
      imageAlt: 'A slice of classic Italian tiramisu on a white plate', category: 'classic' },
    { id: 2, name: 'Strawberry Tiramisu', description: 'Fresh Strawberry & Cream', price: 14.00,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAy6m2eqkE60pcrwMvLALigO7_AfF-_OQNI5u7Ur1cv1vsxE9dL2Msr1uulwjbGRdhN_YuVbcPtzm-ICZESTZ3bl2HsOkyZBE3jVnWLi-0geo7c8ZEEZ_aTO2h59bDh22u0zSrWuJu8LXG-9SzNP_ov8Q7bIq9AuDP4UZ_oDEMCjlzbAEN-nRuVk8DXFuwmRsPwiHbUG2KhoPTotVudJ1-AyNkPRxOaPcjin5rcgdN4dsiE_ViEIxOGJXrAHMnfMd2zG08afg1vX7k',
      imageAlt: 'A vibrant strawberry tiramisu garnished with fresh strawberries', category: 'fruit-infused' },
    { id: 3, name: 'Matcha Tiramisu', description: 'Earthy Green Tea Twist', price: 14.00,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3799714NlN6_FzGQie3sIYkuBVkIuB8vs0vlIi9ANHll423Q0WmlKBT8F4DciRAosjxyT-aZGp3HrbudI4-s9ZQO9VxgrAiOGetKh-LEuq7rMrIC3RgzVp8c9FH6FTzFxdrGUB-WJ84eWrBoXUBTh9eR5E5WC2rDsBd933fKuUkcaP2F4hfdJ__fHCtvvAjlIYd20Tl4I1dD9ZSlqv7yIZ4HFYG22GubbfVyCgN9oWUYoQR7CEq0rN-4-QAUB3wAwS7XEFZ1WbUI',
      imageAlt: 'A slice of matcha tiramisu with green tea powder dusted on top', category: 'classic' },
    { id: 4, name: 'Lemon Tiramisu', description: 'Zesty Lemon Infusion', price: 13.50,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5GUaHztDfimPqntRSMfSMjqACR8FAarPcZo5DveJQoSuD3c7mewv6nuqhhCaPRM_f5mvDo9TgdwF871zJyzBDj0njL5C6-dVD9QrDRoTMe4cvbiXAHGSmWk5_GcYjz6iilrVO62cJZsLHfvV1VpBEPs1kfzgVrCoI8sfn_qQaz2ITzNzZvnse47OjDCPDNOCYbVmS6_DmvmxO1J932YAjTnxkEjNrKtN8DPP20svmi9NW-MWlxSBZxPTSXAfZbF4c4EknfS0aPNI',
      imageAlt: 'A bright and zesty lemon tiramisu with lemon slices', category: 'fruit-infused' },
    { id: 5, name: 'Chocolate Hazelnut Tiramisu', description: 'Rich Chocolate & Nut', price: 15.00,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8r8Qz3kRA-RLTAYYkE5v7kv_1iYHbDNTizBncTV6HicfeSZ-VZ9Gwu-UwxSFvllNM9JYae7fzj4dgXMuAaCzLzJJ87m1kqXp87yTGhIDcp8B5SwN9OytBtVdlNPRF9FPz4FTPm7RcQ9faomnQEH7uVDbcTpvbHtzHvMA3XdGfFdAhLTTigh-n2UonhFOkqihpE556BDIv7ZMBvNSTSB5nTYudmk6j_3x7U9lWCX_88LjA9_iNfSlmYqup-4p5O2jm_4uHxfpXeCE',
      imageAlt: 'A rich chocolate hazelnut tiramisu topped with chopped hazelnuts', category: 'classic' },
    { id: 6, name: 'Pistachio Tiramisu', description: 'Delicate Pistachio Cream', price: 15.00,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDF5MB8i6Sglhm5cWTLuXCNqX1DWp0mSenTvt7kSbC-4i6OPeY6-_ffmUi386DPXFfkT6rgbv0Mv2RzRQFidD3UT8QegHq3DcxnQ0QwNHMb8rFeLNEL-5YxNAx82-aCzs20Bm3LRMdGYONSXePY6LjlwaVfzIIq2jCWcP2nutuQXCnqhWGWtyEyHKZn6zD2GbF-9YidfZNXPbXYbfmtbS7zV3Zl9WN8qJct5S5xu9Th7tBRLrGnJuxJN_eavxKtIQVTzZVzshPvVKE',
      imageAlt: 'A delicate pistachio tiramisu with green pistachio cream', category: 'classic' },
    { id: 7, name: 'Raspberry Tiramisu', description: 'Tangy Raspberry Twist', price: 14.50,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBF1zzPLODNaIzVQ7rNM0e8Uy3eVyP4P67jFlqeICMQinnfzSDlNBQ1MGIIfAMHeaQcMC0G4-1MKN5cAkR1Sh_MlxOIMYz38acpO4nXJt_M4r3QIkUF3iMZAiSChgJMbNYLF7KLdCT08spW08tayztwKmcNGXAguGFhOmQb41qjdVqvih1PBVhFtmHH7J7ck0PeHLYtALdcG1GIn_gKNCedBbbkYo1ywpjTDHBmJdmEJ_MW3PBkl7heXWHsD37Kb-D9yDhFFPMMdWE',
      imageAlt: 'A raspberry tiramisu layered with fresh raspberries', category: 'fruit-infused' },
    { id: 8, name: 'Caramel Tiramisu', description: 'Sweet & Salty Caramel', price: 14.00,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATwDTKAaRCSHj7u2iCFS1FKZ3HLk4dUJa18MEAsPiYav8FEH2s8Bq9ZO85ezBg7jtTeuOmbhp3-s0VV0puIHYETh_XocuOFtgUITObW2ELOuQevSlPLEYCUrI-Xrz5ldUtDCyd6_DI8y0tCNDoO7lhPd9oaKJHx7fHRyDr0a8IKgUvRTCis0o8a8gWEx6JLRYmvrdA1-MLzwR5WZkWu539iatO3JkYSXSY7rfqBhk7Tviz9JkQVlidonG1UnnMFE6WyXxV5JDTbwA',
      imageAlt: 'A caramel tiramisu drizzled with rich caramel sauce', category: 'liqueur-free' }
  ];

  filteredProducts: TiramisuProduct[] = [...this.products];
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

  addToCart(product: TiramisuProduct): void {
    console.log('Added to cart:', product.name);
    // TODO: plug into a CartService later
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
