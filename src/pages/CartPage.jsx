import React, { useContext } from 'react';
import { ShopContext  } from '../context/ShopContext';
import { Link } from 'react-router-dom';


const CartPage = () => {
  const { cart, addToCart , getTotalItems ,   removeFromCart, clearCart } = useContext(ShopContext);

  

  const getTotalPrice = () => {
    return Object.values(cart).reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
  };

  return (
    <div className="container m-4 p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {Object.keys(cart).length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-6">
            {Object.values(cart).map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
                <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-cover rounded-md" />
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-gray-600">Price: ${item.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <div className="w-full  bg-pink-100 text-black  font-semibold  hover:bg-blue-100 flex justify-around items-center m-0 p-2"
              >
                <button className="flex items-center space-x-2" key={item.id}>
                <span className='bg-pink-200 w-5 rounded-md' onClick={() => addToCart(item)}> + </span>Add to Cart({getItemQuantity(item.id)})<span className='bg-pink-200 w-5 rounded-md' onClick={() => removeFromCart(item)}> - </span>
                </button>
              </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Total Items: {getTotalItems()}</h3>
              <h3 className="text-xl font-bold">Total Price: ${getTotalPrice()}</h3>
            </div>
            <button
              onClick={clearCart}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
            >
              Clear Cart
            </button>
          </div>
        </>
      ) : (
        <div className='flex flex-col'>
        <p className="text-gray-700 p-10 m-10">Your cart is empty.</p>
       
        <Link to='/ProductPage'>
        <button className='bg-gray-50 text-center font-semibold'>Check Products</button>
      </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
