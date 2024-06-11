import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const ProductPage = () => {
  const { products, cart, addToCart , removeFromCart } = useContext(ShopContext)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const getItemQuantity = (itemId) => {
    return cart[itemId] ? cart[itemId].quantity : 0
  }

  // Get unique categories from products
  const categories = ['all', ...new Set(products.map(product => product.category))]

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory)

  return (
    <div className="container mx-auto p-4 flex flex-row">
      <div className='w-1/4 pr-4 '>
        <div className="mb-4">
          <h2 className='font-bold'>Categories</h2>
          <ul >
            {categories.map(category => (
              <li key={category} className='mt-2'>
                <button onClick={() => setSelectedCategory(category)}
                className={`block w-full  text-left text-md px-1 py-2 rounded ${selectedCategory === category ? 'bg-purple-200 text-black' : 'bg-purple-50 text-gray-900 hover:bg-purple-300'}`}>{category}</button>
              </li>
            ))}
          </ul>

        </div>

      </div>
<div className=' w-3/4'>
      {filteredProducts.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg">
              <img src={item.thumbnail} className="w-full h-48 object-cover rounded-md mb-4" />
              <h2 className="text-lg font-bold mb-2 text-center" key={item.title}>{item.title}</h2>
             
              <div className="w-full text-black  font-semibold  hover:bg-purple-100 flex justify-around items-center m-0 p-2 rounded-lg gap-2"
              >
                <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-700 gap-5"  key={item.id}>
                <span className='w-5 rounded-md' onClick={() => addToCart(item)}> + </span>Add to Cart({getItemQuantity(item.id)})<span className=' w-5 rounded-md' onClick={() => removeFromCart(item)}> - </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div></div>
  )
}

export default ProductPage
