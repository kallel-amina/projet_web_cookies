import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FavoriteItem {
  name: string;
  image: string;
  category: string;
}

interface Order {
  id: string;
  date: string;
  items: string[];
  total: number;
  status: 'Delivered' | 'Pending' | 'Cancelled';
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class ProfileComponent {

  activeTab: 'account' | 'favorites' | 'orders' = 'account';

  user = {
    name: 'Sweet Lover',
    email: 'sweetlover@gmail.com',
    phone: '+216 22 333 444',
    address: 'Sweet Street, Dessert City'
  };

  favorites: FavoriteItem[] = [
    {
      name: 'Chocolate Cookies',
      category: 'Cookies',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfrJx0tWaBAzLour74tDY_cSDSNTOChFmo2Al1bXqOhb9qbyu523_qL-AyyXaaep6UrmDPiVIhr6MerlCZgFvlj5H3cl6_nQ0RTBq0_82i3Pzpqsgza5AnP_dJh6g4MzZ8Q93uwEk72P6ivzrhvyEGNZCZ61IURRVVGjyGnx1BusRnFgn7O_RuSmD3nqRSD35vY9Rs6O-7M7wC7JyMhIIGH1QUZVjBwe9fgEkTgaaCi1Pm63-79tq9n27yPyixBXwzX1vwOveER_c'
    },
    {
      name: 'Classic Tiramisu',
      category: 'Tiramisu',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNxY7WwvCSMUFfur-re7K-GIXXKoDw9rreojJWShaF8ghGT9crube9LV3fdj57-Pmhjp6MAtOCQBcHJ0InG6jvMYVu_tWsb6DAXprZl5Gs-aWYmu2smTKQq56nO7oXiQm1a9ltDQgbWkxj4JhQWPjKKRtT7otS-J-E-QAIpM3fxG9AUOXxnA1wD8hc_l-IDNl2zsbeTWbyYBjplZexG3ib58DAsUxxBZ7AfMd3PNSwEACVIT7Z_DfYkK58GY5nf4ez9FjQc7qgzOE'
    },
    {
      name: 'Fudge Brownies',
      category: 'Brownies',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5lELSmmqAoc2VIAnPgjrTU2YsrJHF_Flpgwx_EzrZNGdNd2ZnWYbxBYvbH7P3Wi5zDux6feV2p-rG2vYacBF6RIXpoxze-Ks6HGSIXaB-QXnoGXYnAYIGEa1v00Nsfn5x8vNGsERcfGRDLp31nHI9jp2o2HpxP7jhMyiZTFGjRCWDkotXqDHLICUIM5aCtvp2cPR8xUWAZ8E2YwygAp4hPK0VWcktRqLi_Qfh5yzwTMxbKqglxA4IkoEUF8ycoNxop_MbXpW6apc'
    }
  ];

  orders: Order[] = [
    {
      id: '#SB-1023',
      date: '12 Aug 2025',
      items: ['Chocolate Cookies', 'Classic Tiramisu'],
      total: 24.50,
      status: 'Delivered'
    },
    {
      id: '#SB-1041',
      date: '05 Aug 2025',
      items: ['Fudge Brownies'],
      total: 9.99,
      status: 'Delivered'
    },
    {
      id: '#SB-1088',
      date: '30 Jul 2025',
      items: ['Cookies Box', 'Brownies Box'],
      total: 32.00,
      status: 'Pending'
    }
  ];

  removeFavorite(item: FavoriteItem) {
    this.favorites = this.favorites.filter(f => f !== item);
  }
}
