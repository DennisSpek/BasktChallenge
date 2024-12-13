import React, { useEffect, useState } from 'react';
import products from '../data/sample_json/products_sample.json';
import { ItemRow } from '../components/itemRow';
import { useBasket } from '../context/consumer';

const ProductsView = () => {
  const { basket, totalCost, totalItems } = useBasket();

  useEffect(() => {
    console.log('Basket:', basket);
  }, [basket]);

  return (
    <div className='w-full p-16 text-sm'>
      <nav className="flex flex-row justify-end p-4 border-b text-base">
        <div className="mr-4">Basket Items: {totalItems}</div>
        <div>Total Price: £{totalCost}</div>
      </nav>
      <div className='flex flex-col'>
        {products.map((product, index) => (
          <ItemRow key={index} item={product} />
        ))}

      </div>
      <div className='flex flex-row justify-end mt-6'>
        <a href='/example_html/checkout' className='text-s p-2 rounded border border-blue-600 bg-blue-500 hover:bg-blue-600 hover:bg-blue-700 text-white'>Proceed to Checkout</a>
      </div>
    </div>
  );
}

export default ProductsView;