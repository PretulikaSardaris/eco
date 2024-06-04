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
      <div className='bg-blue-100 gap-5 m-3 p-3 rounded-2xl' > 
        <img className='bg-pink-100 gap-5 rounded-md' src={item.thumbnail} alt={item.title}/>
        <h1 className='flex items-center font-semibold justify-center'>{item.title}</h1>
      </div>
    )) }</div> </div>
      ))}
    </div>
  )
}

export default ProductCards

// const ProductCards = () => {
//   const { products, cart, addToCart } = useContext(ShopContext)
//   const [selectedCategory, setSelectedCategory] = useState('all')

//   const categories = ['all', ...new Set(products.map(product => product.category))]

//   // Filter products based on selected category
//   const filteredProducts = selectedCategory === 'all'
//     ? products
//     : products.filter(product => product.category === selectedCategory)



//   return (
//     <>
//         <div className='flex justify-center font-serif font-semibold text-3xl m-2 p-5'><ul >
//             {categories.map(category => (
//               <li key={category} className='mt-2'>
//                 <h1 onClick={() => setSelectedCategory(category)}
//                 className={`block w-full text-left px-4 py-2 rounded-md ${selectedCategory === category ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-pink-700'}`}>{category}
//                </h1>
                
//               </li>
//             ))}
//           </ul>
//           </div>
//     <div className='flex flex-row gap-3 rounded-lg p-20'>
     
      
//         <div>
//         <img src="https://images.ctfassets.net/86of3mjdn78g/3xe56s8QA7VBVaeaBFqxBS/a2c1364d3766de9340385d24a3ca851b/10_electronic_brands_avex_Banner.jpg" alt="" className='rounded-3xl'/>
//         <span>name</span>
//         <p>offer</p>
//         </div>
//         <div>
//         <img src="https://images.ctfassets.net/86of3mjdn78g/3xe56s8QA7VBVaeaBFqxBS/a2c1364d3766de9340385d24a3ca851b/10_electronic_brands_avex_Banner.jpg" alt="" className='rounded-3xl' />
//         <span>name</span>
//         <p>offer</p>
//         </div>
//         <div>
//         <img src="https://images.ctfassets.net/86of3mjdn78g/3xe56s8QA7VBVaeaBFqxBS/a2c1364d3766de9340385d24a3ca851b/10_electronic_brands_avex_Banner.jpg" alt="" className='rounded-3xl'/>
//         <span>name</span>
//         <p>offer</p>
//         </div>
//     </div>
//     <h1 className='flex justify-center font-serif font-semibold text-3xl m-2'>Best Gadgets & Appliances</h1>
//     <div className='flex rounded-3xl'>
        
//         <div className='bg-pink-50 p-5 m-3 rounded-3xl'>
//             <img src="https://images.ctfassets.net/86of3mjdn78g/3xe56s8QA7VBVaeaBFqxBS/a2c1364d3766de9340385d24a3ca851b/10_electronic_brands_avex_Banner.jpg" alt="" />
//             <span>Durable material</span>
//             <p>Price</p>

//         </div>
//         <div className='bg-pink-50 p-5 m-3 rounded-3xl'>
//             <img src="https://images.ctfassets.net/86of3mjdn78g/3xe56s8QA7VBVaeaBFqxBS/a2c1364d3766de9340385d24a3ca851b/10_electronic_brands_avex_Banner.jpg" alt="" />
//             <span>Durable material</span>
//             <p>Price</p>

//         </div>
//     </div>

//     <h1 className='flex justify-center font-serif font-semibold text-3xl m-2'> Check more items</h1>
//     < className='flex flex-row gap-20 justify-center items-center m-5 p-5 rounded-3xl'>
//     <div className='grid grid-cols-2 gap-4 rounded-3xl'>
// <div className='rounded-3xl'><img src="https://www.schott.com/-/media/project/onex/shared/teasers/consumer-electronics/consumer-electronics_01-displays_00_720x450.jpg?rev=fe6df7a508644a7d8e294e6c294a317b" alt=""  className='rounded-3xl'/></div>
// <div className='rounded-3xl'><img src="https://www.schott.com/-/media/project/onex/shared/teasers/consumer-electronics/consumer-electronics_01-displays_00_720x450.jpg?rev=fe6df7a508644a7d8e294e6c294a317b" alt="" className='rounded-3xl' /></div>

// <div className='rounded-3xl'><img src="https://www.schott.com/-/media/project/onex/shared/teasers/consumer-electronics/consumer-electronics_01-displays_00_720x450.jpg?rev=fe6df7a508644a7d8e294e6c294a317b" alt=""  className='rounded-3xl'/></div>
// <div className='rounded-3xl'><img src="https://www.schott.com/-/media/project/onex/shared/teasers/consumer-electronics/consumer-electronics_01-displays_00_720x450.jpg?rev=fe6df7a508644a7d8e294e6c294a317b" alt="" className='rounded-3xl' /></div>

//     </div>

//     <d className=' grid grid-cols-2 gap-4'>
// <div className=''><img src="https://www.schott.com/-/media/project/onex/shared/teasers/consumer-electronics/consumer-electronics_01-displays_00_720x450.jpg?rev=fe6df7a508644a7d8e294e6c294a317b" alt="" className='rounded-3xl'/></div>
// <div className=''><img src="https://www.schott.com/-/media/project/onex/shared/teasers/consumer-electronics/consumer-electronics_01-displays_00_720x450.jpg?rev=fe6df7a508644a7d8e294e6c294a317b" alt="" className='rounded-3xl'/></div>

// <div className=''><img src="https://www.schott.com/-/media/project/onex/shared/teasers/consumer-electronics/consumer-electronics_01-displays_00_720x450.jpg?rev=fe6df7a508644a7d8e294e6c294a317b" alt="" className='rounded-3xl'/></div>
// < className='bg-pink-50'><img src="https://www.schott.com/-/media/project/onex/shared/teasers/consumer-electronics/consumer-electronics_01-displays_00_720x450.jpg?rev=fe6df7a508644a7d8e294e6c294a317b" alt="" className='rounded-3xl'/>
// </>
   
//   )
// }

// export default ProductCards
