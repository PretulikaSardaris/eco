import React, { useContext, useEffect, useState } from 'react'
 import { ShopContext } from '../context/ShopContext'

 const groupProductsByCategory = (products) => {
  return products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});
}; 

const ProductCards = () => {
  const { products } = useContext(ShopContext)
  const productByCategory = groupProductsByCategory(products);


  return (
    <div>
      {Object.entries(productByCategory).map(([category , items])=>(
<div>
  <h1 className='flex flex-col uppercase font-semibold items-center text-3xl p-5 m-3'>{category}</h1>
  <div className='flex flex-row'>
    {items.slice (0,4).map((item) => (
      <div className='bg-blue-50 hover:bg-pink-50 gap-5 m-3 p-3 rounded-2xl' > 
        <img className=' bg-pink-50 hover:bg-blue-50 gap-5 rounded-md' src={item.thumbnail} alt={item.title}/>
        <h1 className='hidden md:flex items-center font-semibold justify-center'>{item.title}</h1>
      </div>
    )) }</div> </div>
      ))}
    </div>
  )
}

export default ProductCards

