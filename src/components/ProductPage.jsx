
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const ProductPage = () => {

   
   const {products , cart , addToCart } = useContext(ShopContext)

   const getItemQuantity = (itemId) => {
    return cart[itemId] ? cart[itemId].quantity : 0 ;
   }

  return (
    <div className="container mx-auto p-4">
      {
        products.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                { products.map((item) => (
                        <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg">
                          <img src={item.thumbnail} className="w-full h-48 object-cover rounded-md mb-4"/>
                          <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                            <p className="text-gray-700 mb-4">{item.description}</p>
                            <button
                            onClick={() => addToCart(item)}
                            className="bg-slate-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                        Add to Cart  ({getItemQuantity(item.id)})
                     </button> </div>
                ))} </div> 
        )}
    </div>
  )
}

export default ProductPage

