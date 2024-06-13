import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';

const CartPage = () => {
  const { cart, products, removeFromCart, clearCart, getTotalItems } = useContext(ShopContext);

  const[msg , setMsg] = useState(false)
  

  const renderCartItems = () => {
    return Object.keys(cart).map((key) => {
      const item = cart[key];
      const product = products.find(p => p.id === item.id);

      if (item.quantity === 0) {
        return null;
      }

      return (
        <div key={item.id} className='flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4'>
          <div className='flex'>
            <img src={product.thumbnail} alt={product.title} className='w-24 h-24 object-cover rounded-md shadow-md mr-4' />
            <div>
              <h2 className='font-bold text-xl text-gray-800'>{product.title}</h2>
              <p className='text-gray-600'>Price: ${item.price}</p>
              <p className='text-gray-600'>Quantity: {item.quantity}</p>
              <button className='text-red-700 hover:text-red-900 text-sm font-medium mt-2' onClick={() => removeFromCart(item)}>Remove</button>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className='bg-purple-100 min-h-screen'>
      <div className='max-w-4xl mx-auto p-8'>
        <h1 className='text-3xl font-semibold text-purple-800 mb-8'>Shopping Cart</h1>
        {cart.length === 0 ? (
          <p className='text-lg text-gray-700'>Your cart is empty.</p>
        ) : (
          <>
            {renderCartItems()}
            <div className='flex justify-between items-center mt-8'>
              <button className='bg-pink-700 text-white py-2 px-4 rounded-lg hover:bg-pink-500' onClick={clearCart}>Clear Cart</button>
              <div className='text-lg font-semibold text-purple-800'>Total items: {getTotalItems}</div>
              <button className='bg-purple-700 text-white py-2 px-4 rounded-lg hover:bg-purple-900'
               onClick={()=> setMsg(!msg)}> { msg ? ' Trupti kasar - You get 1 Million $ for instant Payment!!': 'Proceed to Checkout'}</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
