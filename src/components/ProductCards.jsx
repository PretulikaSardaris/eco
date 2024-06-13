import React, { useContext, useEffect, useState } from 'react'
 import { ShopContext  } from '../context/ShopContext'
import { Link  } from "react-router-dom";

const ProductCards = () => {
  const { products } = useContext(ShopContext);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const groupProductsByCategory = (products) => {
    return products.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    }, {});
  }; 


  const productByCategory = groupProductsByCategory(products);
 
  return (
    <div className='bg-purple-100'>
      {Object.entries(productByCategory).map(([category , items])=>(
<div key={category}>
  <h1 className='flex flex-col uppercase font-bold items-center text-xl md:text-3xl p-5 m-3 text-purple-900 font-serif'>{category}</h1>
  <div className='flex flex-row'>
    {items.slice (0,4).map((item) => (
      <div className=' hover:bg-pink-50 gap-5 p-1 m-1 rounded-full' > <Link to={`/category/${category}`}>
        <img className='hover:bg-purple-100 gap-3 rounded-full object-cover border-2 ' src={item.thumbnail} alt={item.title} onClick={() => setSelectedCategory(category)}/></Link>
        <h1 className='hidden  md:flex items-center font-semibold justify-center text-center'>{item.title}</h1>
      </div>
    )) }</div> </div>
      ))}
    </div>
  )
}

export default ProductCards

