import { create } from 'zustand';
import { IProduct } from '@/data/data';
import { StateCreator } from 'zustand';

interface CartItem extends IProduct {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addToCart: (product: IProduct) => void;
  getTotalItems: () => number;
}

const createCartStore: StateCreator<CartStore> = (set, get) => ({
  items: [],

  addToCart: (product: IProduct) => {
    set((state: CartStore) => {
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        items: [...state.items, { ...product, quantity: 1 }],
      };
    });
  },

  getTotalItems: () => {
    const state = get();
    return state.items.reduce((total, item) => total + item.quantity, 0);
  },
});

export const useCartStore = create(createCartStore);
