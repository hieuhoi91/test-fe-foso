export interface IProduct {
  id: number;
  image: string;
  name: string;
  price: number;
  discount: number;
}

const products: IProduct[] = [
  {
    id: 1,
    image: '/product-1.png',
    name: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer',
    price: 390000,
    discount: 10,
  },
  {
    id: 2,
    image: '/product-2.png',
    name: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer',
    price: 105000,
    discount: 10,
  },
  {
    id: 3,
    image: '/product-3.png',
    name: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer',
    price: 396000,
    discount: 10,
  },
  {
    id: 4,
    image: '/product-4.png',
    name: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer',
    price: 550000,
    discount: 10,
  },
  {
    id: 5,
    image: '/product-1.png',
    name: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer',
    price: 135150,
    discount: 15,
  },
  {
    id: 6,
    image: '/product-1.png',
    name: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer',
    price: 390000,
    discount: 10,
  },
  {
    id: 7,
    image: '/product-2.png',
    name: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer',
    price: 105000,
    discount: 10,
  },
  {
    id: 8,
    image: '/product-3.png',
    name: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer',
    price: 396000,
    discount: 10,
  },
  {
    id: 9,
    image: '/product-4.png',
    name: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer',
    price: 550000,
    discount: 10,
  },
  {
    id: 10,
    image: '/product-1.png',
    name: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer',
    price: 135150,
    discount: 15,
  },
  {
    id: 11,
    image: '/product-1.png',
    name: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer',
    price: 135150,
    discount: 15,
  },
  {
    id: 12,
    image: '/product-1.png',
    name: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer',
    price: 135150,
    discount: 15,
  },
];
export interface ISortOption {
  id: number;
  name: string;
  value: string;
}

const sortOptions: ISortOption[] = [
  {
    id: 1,
    name: 'Liên quan',
    value: 'relevant',
  },
  {
    id: 2,
    name: 'Bán chạy',
    value: 'bestseller',
  },
  {
    id: 3,
    name: 'Mới nhất',
    value: 'newest',
  },
  {
    id: 4,
    name: 'Nổi bật',
    value: 'featured',
  },
];

export interface ICategory {
  id: number;
  name: string;
  icon?: string;
  subcategories?: {
    id: number;
    name: string;
    image?: string;
    subItems?: {
      id: number;
      name: string;
    }[];
  }[];
  bestSellers?: IProduct[];
}

const categories: ICategory[] = [
  {
    id: 1,
    name: 'Bộ lọc dầu',
    icon: '/bo-loc-gio.png',
    subcategories: [
      {
        id: 101,
        name: 'Bộ lọc dầu',
        image: '/bolocgio1.png',
      },
      {
        id: 102,
        name: 'Bộ lọc dầu',
        image: '/bolocgio1.png',
      },
      {
        id: 103,
        name: 'Bộ lọc dầu',
        image: '/bolocgio1.png',
      },
      {
        id: 104,
        name: 'Bộ lọc dầu',
        image: '/bolocgio1.png',
      },
      {
        id: 105,
        name: 'Bộ lọc dầu',
        image: '/bolocgio1.png',
      },
      {
        id: 106,
        name: 'Bộ lọc dầu',
        image: '/bolocgio1.png',
      },
    ],
    bestSellers: [
      {
        id: 1,
        image: '/product-1.png',
        name: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer',
        price: 390000,
        discount: 10,
      },
      {
        id: 2,
        image: '/product-2.png',
        name: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer',
        price: 105000,
        discount: 10,
      },
      {
        id: 3,
        image: '/product-3.png',
        name: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer',
        price: 396000,
        discount: 10,
      },
      {
        id: 4,
        image: '/product-4.png',
        name: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer',
        price: 550000,
        discount: 10,
      },
      {
        id: 5,
        image: '/product-1.png',
        name: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer',
        price: 135150,
        discount: 15,
      },
    ],
  },
  {
    id: 2,
    name: 'Bộ lọc không khí',
    icon: '/bolockokhi.png',
    subcategories: [
      {
        id: 201,
        name: 'Bộ lọc không khí',
        image: '/bolockokhi.png',
      },
      {
        id: 202,
        name: 'Bộ lọc không khí',
        image: '/bolockokhi.png',
      },
      {
        id: 203,
        name: 'Bộ lọc không khí',
        image: '/bolockokhi.png',
      },
    ],
  },
  {
    id: 3,
    name: 'Bộ lọc nhiên liệu',
    icon: '/bolocnhienlieu.png',
    subcategories: [
      {
        id: 301,
        name: 'Bộ lọc nhiên liệu',
        image: '/bolocnhienlieu.png',
      },
      {
        id: 302,
        name: 'Bộ lọc nhiên liệu',
        image: '/bolocnhienlieu.png',
      },
      {
        id: 303,
        name: 'Bộ lọc nhiên liệu',
        image: '/bolocnhienlieu.png',
      },
    ],
  },
  {
    id: 4,
    name: 'Bộ lọc trong Cabin',
    icon: '/boloccabin.png',
    subcategories: [
      {
        id: 401,
        name: 'Bộ lọc trong Cabin',
        image: '/boloctrongcabin.png',
      },
      {
        id: 402,
        name: 'Bộ lọc trong Cabin',
        image: '/boloctrongcabin.png',
      },
      {
        id: 403,
        name: 'Bộ lọc trong Cabin',
        image: '/boloctrongcabin.png',
      },
    ],
  },
  {
    id: 5,
    name: 'Bộ lọc dầu',
    icon: '/bo-loc-gio.png',
    subcategories: [
      {
        id: 501,
        name: 'Bộ lọc dầu',
        image: '/bolocgio1.png',
      },
      {
        id: 502,
        name: 'Bộ lọc dầu',
        image: '/bolocgio1.png',
      },
      {
        id: 503,
        name: 'Bộ lọc dầu',
        image: '/bolocgio1.png',
      },
      {
        id: 504,
        name: 'Bộ lọc dầu',
        image: '/bolocgio1.png',
      },
      {
        id: 505,
        name: 'Bộ lọc dầu',
        image: '/bolocgio1.png',
      },
      {
        id: 506,
        name: 'Bộ lọc dầu',
        image: '/bolocgio1.png',
      },
    ],
    bestSellers: [
      {
        id: 1,
        image: '/product-1.png',
        name: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer',
        price: 390000,
        discount: 10,
      },
      {
        id: 2,
        image: '/product-2.png',
        name: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer',
        price: 105000,
        discount: 10,
      },
      {
        id: 3,
        image: '/product-3.png',
        name: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer',
        price: 396000,
        discount: 10,
      },
      {
        id: 4,
        image: '/product-4.png',
        name: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer',
        price: 550000,
        discount: 10,
      },
      {
        id: 5,
        image: '/product-1.png',
        name: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer',
        price: 135150,
        discount: 15,
      },
    ],
  },
  {
    id: 6,
    name: 'Bộ lọc không khí',
    icon: '/bolockokhi.png',
    subcategories: [
      {
        id: 601,
        name: 'Bộ lọc không khí',
        image: '/bolockokhi.png',
      },
      {
        id: 602,
        name: 'Bộ lọc không khí',
        image: '/bolockokhi.png',
      },
      {
        id: 603,
        name: 'Bộ lọc không khí',
        image: '/bolockokhi.png',
      },
    ],
  },
  {
    id: 7,
    name: 'Bộ lọc nhiên liệu',
    icon: '/bolocnhienlieu.png',
    subcategories: [
      {
        id: 701,
        name: 'Bộ lọc nhiên liệu',
        image: '/bolocnhienlieu.png',
      },
      {
        id: 702,
        name: 'Bộ lọc nhiên liệu',
        image: '/bolocnhienlieu.png',
      },
      {
        id: 703,
        name: 'Bộ lọc nhiên liệu',
        image: '/bolocnhienlieu.png',
      },
    ],
  },
  {
    id: 8,
    name: 'Bộ lọc trong Cabin',
    icon: '/boloccabin.png',
    subcategories: [
      {
        id: 801,
        name: 'Bộ lọc trong Cabin',
        image: '/boloccabin.png',
      },
      {
        id: 802,
        name: 'Bộ lọc trong Cabin',
        image: '/boloccabin.png',
      },
      {
        id: 803,
        name: 'Bộ lọc trong Cabin',
        image: '/boloccabin.png',
      },
    ],
  },
];

export interface IPriceRange {
  id: number;
  name: string;
  count: number;
}

const priceRanges: IPriceRange[] = [
  {
    id: 1,
    name: 'Dưới 100.000 đ',
    count: 24,
  },
  {
    id: 2,
    name: '100.000 đ - 300.000 đ',
    count: 24,
  },
  {
    id: 3,
    name: '300.000 đ - 500.000 đ',
    count: 24,
  },
  {
    id: 4,
    name: 'Trên 500.000 đ',
    count: 24,
  },
];

export interface IBrand {
  id: number;
  name: string;
  count: number;
}

const brands: IBrand[] = [
  {
    id: 1,
    name: 'Asakashi',
    count: 24,
  },
  {
    id: 2,
    name: 'Bosch',
    count: 24,
  },
  {
    id: 3,
    name: 'Huyndai',
    count: 24,
  },
];

export interface IYear {
  id: number;
  year: string;
  count: number;
}

const years: IYear[] = [
  {
    id: 1,
    year: '2020',
    count: 24,
  },
  {
    id: 2,
    year: '2019',
    count: 24,
  },
  {
    id: 3,
    year: '2018',
    count: 24,
  },
];

export interface IOrigin {
  id: number;
  name: string;
  count: number;
}

const origins: IOrigin[] = [
  {
    id: 1,
    name: 'Đức',
    count: 24,
  },
  {
    id: 2,
    name: 'Nhật Bản',
    count: 24,
  },
  {
    id: 3,
    name: 'Trung Quốc',
    count: 24,
  },
];

export {
  products,
  sortOptions,
  categories,
  priceRanges,
  brands,
  years,
  origins,
};
