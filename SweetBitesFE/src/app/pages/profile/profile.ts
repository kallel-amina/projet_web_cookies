import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface OrderItem {
  id: string;
  date: string;
  total: string;
  status: string;
  items: { name: string; qty: number; image: string }[];
}

interface FavoriteItem {
  name: string;
  image: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class ProfileComponent {
  fullName = 'Amelia Rose';
  email = 'amelia.rose@example.com';
  phone = '+1 (555) 123-4567';
  address = '123 Sweet Lane, Pastryville, CA 90210';
  avatarUrl = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEAFXBd0nPl4QbFvxAdCe1DosdFvKmb17-mtrAf84z1uRRg7ior94QvkscahPH7TZgPB4FWP_bEXsawolXP76mut9PqLQpaGLJO-YF2w2eZSFjUjawqkJI2pPwyd4xyL43v9O13rn5tQzhtpTTKmF3VdYM-_0AscDVoDucBZeMtdPR_wuGeEdlINN6ZHWr7xYT9WfvR2jb18vbL9h7QOMWLPiZ8pzVSJDyQ2Vi7-jOxXozRHksx-iwgzFu-NUYw5xAbVresNAFL9Y';

  orders: OrderItem[] = [
    {
      id: '#SB1024',
      date: 'Oct 23, 2023',
      total: '$124.50',
      status: 'Delivered',
      items: [
        { name: 'Decadent Chocolate Fudge Cake', qty: 1, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB49QuPsudkFLueHI0r-w6MiHlIwn7xjdnbzxR45oFf5wxQAxpW0GGhyLGWSv51D-QEwTZeH4fGw216LsuPXdT1rx8oNtq2NxCoHf8ncR4yrKKqzvebygQSg-r4LRFHFq5R3EbcrcDMy_bUqUl_ZEgN3lpKP2xOEWbyDnKXKqLEdg_d8JouFThCDBRzeNSCTwF2CnJtkhyjCphZnx1WUWXbwWwtIB-zAEA8BUKTyNAIiZkhNWnZ5a9aiOnoZnaMu_NNasSDoh42A-g' },
        { name: 'Assorted French Macarons (Box of 12)', qty: 2, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTnRexD6lWZlR50r2bsxVEZuS-kA_ZeD5-DFef2jaJLmgPTsmVdSjyUb8jfvLWxwD8nLmRh7HuPLK_Hlnk0LkwGlXekeu545PammOC91mEN0ejRddggbwFVwUjDzg12j_1Ho6VhE9m1DA0H6wj5APsV_y84C4_yGsC5r_v4836nPWSXkcgEWogQSRvi3v-KJm3NYYzvaXLiYZgmIEaL8LJVkdjhQe_K03bRgGXJ6gfLoj6fe-EfgoGBw5y5f8yDpofbUlyUji0MVI' }
      ]
    },
    {
      id: '#SB1023',
      date: 'Oct 15, 2023',
      total: '$88.00',
      status: 'Shipped',
      items: [
        { name: 'Artisan Chocolate Collection', qty: 2, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqEBPTh8NfdJbszIJyCyNgG3CsxQgflg51BbRlQHltFuWyIIRcKg6Grn2eu5Nmw0w113wfe19dEsAMZcNrDsvWNN5ROYTb-tZY60uxbIozTzvzyKq26rxrQAgzVhJWRvFIiV_3noyKnfVNVUz1OWwUqdp14dES_Y9tuUEGkHwojMk27H4Ajtv9FPzs-XrqSyWD6P5QL1XN5c0H24kk6FaXkdfO3iEuT2fTmRhMcsKIa610FRRXkb6VUzGL4Jh2XPAEoImpWczCl0s' }
      ]
    }
  ];

  favorites: FavoriteItem[] = [
    { name: 'Strawberry Shortcake', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7Lp9PfAXPU-yIxq-wx9iBq1xwpDsrYFt7K2PMnkEJP_rKXel1XsWje_WnrpYR5QIrsXvhgqXUpvYs8qqTmWZWPNwxUyig6aWPtlmddzk8jLY3dbNN7Vc_PDigTR4Mg1AEMwHgisr4_SlPtelon6_nUlZDzfL_6RajSp0Slq8gegMErC6PlsWsKJYa7nbMFdK8nH3m9bLgyRqYgk6VW8HLAsb1zldLi7VU-CQ_AfdqcuPni4gc7ByuhePnADUtVNi9sDlcrAcao1Y' },
    { name: 'Raspberry Croissant', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6Nd4pE7QJym53yhUhkQs_KXraSgnPv0D-hsZlo8IhA3gKiub0nYFr0D82MgNSxqFXWD9Cz4ltZ4hPB32ebhKfdKKz44cp7-yDfo4hsh93OoL52hbAUE6VuGZOGZXTZ2QIRoM05dh5vFnUm8yJzAhSV5zUwljB6O62nsEqqZqtKP44JM8n11llEd8qIUYRufbCyxfEwQmJte0AZH5DkdXvIcXXUwQUuO1c3WQeiROi_KsghqlMMEP1zQ2OlCSrMGdpRpoAIXy9fbw' },
    { name: 'French Macarons', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7hGrDJf2bl4DCgFkEFEy-iTADK7NG7Yba2tNeCAJAjv0St_ytkNbWiVU2xo5qVdy2VJygBfZ3NMG3Bl6OUZzN_1p1IAUVN_hm8c4LGTyEUzqCIzJjxdfbdFhxAJ6H1kfYMOCqyiV1HYBlrKRF_YcpoeibfP3M4UFmPK0eaNSlYNE2RN0RHlWmXu0S74j568CDgkj4OZkWh_Cup4an6lRwQb2rkOFwrrNaCDJ-SrnlEG2xcM9s6aIZGNs8uBwgOpdqb2JgFxAnGLQ' },
    { name: 'Lemon Meringue Tart', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwHcvANoCl1aiFjE5OT3q1GvaONz_qWKrjdHB1h7wfJXC48t2YVsPHdq7G_l8ajSowh-2vCWmdRnAwmRuFfFXFZvE6ghKSoJv6SRdqas6SfiQ97Hyyeyyj7nIZGCuALCNxP6Yb_0xXShOIjiBlacprUG0VedtS6BOJo2YCGMRoAOLnlPdsLDxx0KmvJpq9mWz6BeCl-CCatlazgBQ7IK-RDzOt9TSaExr-KbtpjGXMYxzfEARyImRUO6aEm5f9YGKujD2LQLwuBG4' }
  ];

  subscription = {
    name: 'Sweet Bites Connoisseur Club',
    status: 'Active',
    price: 29.99,
    nextBilling: 'Nov 15, 2023',
    benefits: [
      'Monthly curated box of exclusive treats.',
      '15% off all online store purchases.',
      'Free shipping on all orders.'
    ]
  };
}
