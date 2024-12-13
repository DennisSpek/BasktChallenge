import { createContext, useContext } from 'react';

interface BasketContextI {
  basket: BasketItem[];
  totalCost: number;
  totalItems: number;
  addItem: (item: Item) => void;
  removeItem: (item: Item, all?: boolean) => void; 
}

// Create the UserContext with the initial values.
export const BasketContext = createContext<BasketContextI>({
  basket: [],
  totalCost: 0,
  totalItems: 0,
  addItem: () => {},
  removeItem: () => {},
});

export const useBasket = () => useContext(BasketContext);
