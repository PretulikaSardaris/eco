import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const ProductPage = () => {
  const { products, cart, addToCart } = useContext(ShopContext)
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
    <div className="container mx-auto p-4 flex">
      <div className='w-1/4 pr-4'>
        <div className="mb-4">
          <h2>Filter by Category</h2>
          <ul >
            {categories.map(category => (
              <li key={category} className='mt-2'>
                <button onClick={() => setSelectedCategory(category)}
                className={`block w-full text-left px-4 py-2 rounded-md ${selectedCategory === category ? 'bg-blue-100 text-black' : 'bg-gray-200 text-gray-900 hover:bg-pink-100'}`}>{category}</button>
              </li>
            ))}
          </ul>

        </div>

      </div>
<div className='w-3/4'>
      {filteredProducts.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg">
              <img src={item.thumbnail} className="w-full h-48 object-cover rounded-md mb-4" />
              <h2 className="text-lg font-bold mb-2">{item.title}</h2>
             
              <button
                onClick={() => addToCart(item)}
                className="w-full bg-pink-100 text-black  font-semiboldpy-2 px-4 rounded-md hover:bg-blue-100"
              >
                Add to Cart ({getItemQuantity(item.id)})
              </button>
            </div>
          ))}
        </div>
      )}
    </div></div>
  )
}

export default ProductPage
