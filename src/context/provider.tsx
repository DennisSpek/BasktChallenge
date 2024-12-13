import React, { useState, useEffect } from 'react';
import { BasketContext } from './consumer';

export const BasketProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [basket, setBasket] = useState<BasketItem[]>([]);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<number>(0);

  useEffect(() => {
    calculateTotalPrice();
    calculateTotalItems();
  }, [basket]);

  const searchItem = (sku: number) => {
    return basket.findIndex(i => i.sku === sku);
  }

  const calculateTotalPrice = () => {
    setTotalCost(basket.reduce((acc, item) => acc + item.total_price, 0));
  }

  const calculateTotalItems = () => {
    setTotalItems(basket.reduce((acc, item) => acc + item.quantity, 0));
  }

  const addItem = async (item: Item) => {
    const itemIndex = await searchItem(item.sku);

    if (itemIndex >= 0) {
      const existingItem = basket[itemIndex];

      if (existingItem?.quantity >= existingItem?.basketLimit) {
        return;
      }

      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
        total_price: existingItem.price * (existingItem.quantity + 1)
      };

      setBasket(prevState => {
        return prevState.map((item, index) =>
          index === itemIndex ? updatedItem : item
        );
      });

      return;
    } else {
      setBasket(prevState => {
        const newState = [...prevState];
        newState.push({ ...item, quantity: 1, total_price: item.price });
        return newState;
      });
    }

    return;
  };

  const removeItem = async (item: Item, all?: boolean) => {
    const newState = [...basket];
    const itemIndex = await searchItem(item.sku);

    if (all) {
      setBasket(prevState => {
        newState.splice(itemIndex, 1);
        return newState;
      });

      return;
    }

    setBasket(prevState => {
      const existingItem = newState[itemIndex];
      console.log("existingItem", existingItem);
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        existingItem.total_price = existingItem.quantity * existingItem.price;
      } else {
        newState.splice(itemIndex, 1);
      }

      return newState;
    });
  };

  return (
    <BasketContext.Provider value={{ basket, addItem, removeItem, totalCost, totalItems }}>
      {children}
    </BasketContext.Provider>
  );
};
