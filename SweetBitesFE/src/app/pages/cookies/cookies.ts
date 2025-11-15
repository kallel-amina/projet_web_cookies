import { Component } from '@angular/core';

export interface CookieProduct {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  imageAlt: string;
}

@Component({
  selector: 'app-cookies',
  standalone: true,
  templateUrl: './cookies.html',
  styleUrls: ['./cookies.css'],
})
export class CookiesComponent {
  products: CookieProduct[] = [
    {
      id: 1,
      name: 'Chocolate Chunk Delight',
      price: 3.50,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfrJx0tWaBAzLour74tDY_cSDSNTOChFmo2Al1bXqOhb9qbyu523_qL-AyyXaaep6UrmDPiVIhr6MerlCZgFvlj5H3cl6_nQ0RTBq0_82i3Pzpqsgza5AnP_dJh6g4MzZ8Q93uwEk72P6ivzrhvyEGNZCZ61IURRVVGjyGnx1BusRnFgn7O_RuSmD3nqRSD35vY9Rs6O-7M7wC7JyMhIIGH1QUZVjBwe9fgEkTgaaCi1Pm63-79tq9n27yPyixBXwzX1vwOveER_c',
      imageAlt: 'A close-up of a chocolate chunk cookie with melted chocolate chips',
    },
    {
      id: 2,
      name: 'Raspberry White Chocolate',
      price: 3.75,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnKQ0VEvaqiUnlX91zNdZ2wZoq0klBTTRq0aqyfibCtlHI9HGjX7p2hXMhsswN2vgz_gtptM62Gr-DDldI9VXjXnNvtxqKdePjO_VoygS6LYSx8CzQMaNwov3MFoQcTWJQP3y12Va_3Gfea2E1645mcdc4TjvoCfm9EvGQdaMGM9cOPfrXi4hcivac1y0qguJUv6HZZIqEujYi0sICGd_wZNIzas6rrxX53P6MvUlHMTEemMXG_uk0jKsXxxoWcO2nL_uPVIHYRuU',
      imageAlt: 'A cookie with white chocolate chips and raspberry pieces',
    },
    {
      id: 3,
      name: 'Salted Caramel Pecan',
      price: 4.00,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMOWb9yDLck7b5Q6_TxOil2ILYw_PD3JZoGJfkmhED4xLsnBDgJOZASnzeWQjsRLKBRcAtiCXEefEGrhXU8m7_KwvU3sI3lEGlFEf19apNlg8OSC2ga2-laeLzWIibbeyMVUT05A9Kig7g97EzYZHeFkPMh5rOYqp7SqH9eiqQW2UrlohebtIA-c3XoW5X8sgvVqcIXYili2_ef6rQ_LLBgCwN3Dgqh7vP-Fe3EQvEkV6NLfrpkZDiPslQH-7BdnwJRKLshiYjBRo',
      imageAlt: 'A cookie topped with pecans and drizzled with caramel',
    },
    {
      id: 4,
      name: 'Oatmeal Raisin Spice',
      price: 3.25,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBa47T_wSP8e8Zx1frPTlfemySki63wIEuA7jg7dPJ4zeTHybw2Badk2T7hmj2tNbVL1ZkCP0OJh9n94dk_QTsKZXP8IlnEkSz7_o802rxqkEzl9ynFjqjfTYe4g-s4d_RPXK3MA80vQf0pPivICNmt8_yrhDua6mci2L6MJaDcccNgeBy_dzRaYsudW7fFV9x92V_m1nIOryGY3BHkBAA2H5jPVNe53-wxsdFxTngL_54uiuWurUM3G3YOK4QhPklUi4OF3Qm1jJQ',
      imageAlt: 'A classic oatmeal raisin cookie with a hint of cinnamon',
    },
    {
      id: 5,
      name: 'Double Fudge Brownie',
      price: 4.25,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDT7wXOmJHwyxGit0w-eVh_2v3LGLT7GejCM9G4ZdRzTo2fjLE7OjBeRcv1dJpuqys0kzyzl4QxOJrnud3Kv-RI-2MFaj1_10TuXAnY3VtU0_cjUmPPkuy2d9EidX6NKhFuedODIfX65JHFIJsu52Xn3Ay15XbOLgjRoKb8JQxbc96i0ZO33WqysxQGTen7FLb6PPPPqWXKpNqimOA2ZyNCqfwEsSS6vtJlW71XpRjUB0QCoTBT8JEzdoX0y9aS1SXyO7CaIVtQqzA',
      imageAlt: 'A rich, dark double fudge brownie cookie',
    },
    {
      id: 6,
      name: 'Lemon Zest Shortbread',
      price: 3.50,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOnLck-jP8HbabxUuKbe8un21M9OT8SNl3GXlIhqjVMSiwbYsMo2GVejI0Iwo5ZpwNal3P26ocBeLzJWkqXV3D7e6RTNlY0U7xTv5MjKMU-wXLvCdz1tk2zza68OUsVCLy90xmGzm2ESCccEfglzjqUSYzplvJMhlpyMt3poNyUjsO9-BNkBm52YlQpwmYBKUYnC0ywLxuXIlsJNVDFmbJVpybpV3eF179OXGZcBai9BhnkfM2mNfjXCyycGF_dEOCcd2_wMYjCcw',
      imageAlt: 'A delicate shortbread cookie with lemon zest',
    },
    {
      id: 7,
      name: 'Matcha Green Tea',
      price: 3.75,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDm0gE9H_twJ1OU6bwITvAOMBunbBVOTFfzPaqlDGc7m1Mo0zRVP8pWCbHL8BCjmNY9GBGE3sfLj2Wqv_FE4zyI7Acn9p5u_GV8jYeLI1IHBXt_qVbwR9F5O7nNQfBt7u_jl7zGjh3WRXNzuifUcahD4Dv69aM0z-Pj3kihvF_tLJFFXEAJeyyslWVlNEhAlr_NSoeejmR5lMa7zRP9bM_e0VReHbFkXnNCWmMuAIk_7_4qg_63fdFNXFgfooZ0w-aHkh8nZ8lExYo',
      imageAlt: 'A green matcha cookie with a slightly cracked surface',
    },
    {
      id: 8,
      name: 'Almond Biscotti Crisp',
      price: 3.25,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcWRPuUYqgICn6X0cJ6fDNdL0P343Awfk-5w6eCqRa2bXjSWtDBbu2d5jqk-SHhkTl_xjqSiy8wMKuxD1LnEYWqQFFfTX9DuF2iHvMYYh4iBA1sx4UzPVBfoK1pkHwcdTpC6qd19HfBCB9uGHaCohNIZC_HO1teueudWTadCTyMbmdgh-C5do35Z1YgYnMofsJXSXPUyMJtdAgWJPZ3HAVo89hyiOi39RzkDv2-DmsCOVuyDDj3llkAL28L1mmw_i3DsA4ApUqI_M',
      imageAlt: 'A crunchy almond biscotti cookie',
    },
  ];

  addToCart(product: CookieProduct) {
    console.log('Added to cart:', product.name);
    alert(`${product.name} added to cart!`);
  }
}
