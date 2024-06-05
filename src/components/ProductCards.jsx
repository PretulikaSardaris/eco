import React, { useContext, useEffect, useState } from 'react'
 import { ShopContext  } from '../context/ShopContext'
import { Route , Link  } from "react-router-dom";


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
  const [selectedCategory, setSelectedCategory] = useState('all')


  return (
    <div>
      {Object.entries(productByCategory).map(([category , items])=>(
<div>
  <h1 className='flex flex-col uppercase font-semibold items-center text-xl md:text-3xl p-5 m-3'>{category}</h1>
  <div className='flex flex-row'>
    {items.slice (0,4).map((item) => (
      <div className=' hover:bg-pink-100 gap-5 p-1 m-1 rounded-2xl' > <Link to='ProductPage'>
        <img className='hover:bg-blue-100 gap-3 rounded-md object-cover border-2' src={item.thumbnail} alt={item.title} onClick={() => setSelectedCategory(category)}/></Link>
        <h1 className='hidden  md:flex items-center font-semibold justify-center'>{item.title}</h1>
      </div>
    )) }</div> </div>
      ))}
    </div>
  )
}

export default ProductCards

