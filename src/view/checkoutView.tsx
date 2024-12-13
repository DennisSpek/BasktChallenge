import React from 'react';

const CheckoutView = () => {
  return (
    <div className='w-full p-16 text-sm'>
      <nav className="flex flex-row justify-end p-4 border-b text-base">
        <div className="mr-4">Basket Items: 7</div>
      </nav>
      <div className='flex w-full justify-center m-4'>
        <table className="w-3/4 text-center table-fixed">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-200 uppercase">
              <th className='w-1/5 py-2'>Product Name</th>
              <th className='w-1/5 py-2'>Selected Quantity</th>
              <th className='w-1/5 py-2'>Unit Price</th>
              <th className='w-1/5 py-2'>Total Price</th>
              <th className='w-1/5 py-2'></th>
            </tr>
          </thead>
          <tbody className="text-xs">
            <tr>
              <td className='py-4 w-1/6'>Red Product</td>
              <td className='w-1/8'>
                <select name="choice">
                  <option value="1" selected>1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </td>
              <td className='w-1/8'>£1.01</td>
              <td className='w-1/8'>£1.01</td>
              <td><button className='text-xs p-2 rounded border border-red-600 bg-red-500 hover:bg-red-600 hover:bg-red-700 text-white'>Remove All</button></td>
            </tr>
            <tr>
              <td className='py-4 w-1/6'>Orange Product</td>
              <td className='w-1/8'>
                <select name="choice">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4" selected>4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </td>
              <td className='w-1/8'>£2.02</td>
              <td className='w-1/8'>£8.88</td>
              <td><button className='text-xs p-2 rounded border border-red-600 bg-red-500 hover:bg-red-600 hover:bg-red-700 text-white'>Remove All</button></td>
            </tr>
            <tr>
              <td className='py-4 w-1/6'>Green Product</td>
              <td className='w-1/8'>
                <select name="choice">
                  <option value="1">1</option>
                  <option value="2" selected>2</option>
                </select>
              </td>
              <td className='w-1/8'>£4.04</td>
              <td className='w-1/8'>£8.88</td>
              <td><button className='text-xs p-2 rounded border border-red-600 bg-red-500 hover:bg-red-600 hover:bg-red-700 text-white'>Remove All</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='flex p-8 flex-row w-full justify-end text-base'>Total Price: £18.87</div>
      <div className='flex flex-row justify-center items-center'>
        <label>Input Your Card Number</label>
        <input className='w-1/4 p-2 border rounded border-gray-400 ml-4' type='text' />
      </div>
      <div className='flex flex-row justify-end mt-6 px-8'>
        <a href='/products' className='text-s p-2 rounded border border-gray-200 hover:bg-gray-200 hover:bg-gray-300'>Continue Shopping</a>
        <button className='ml-4 text-s p-2 rounded border border-blue-600 bg-blue-500 hover:bg-blue-600 hover:bg-blue-700 text-white'>Checkout</button>
      </div>
    </div>
  );
}

export default CheckoutView;