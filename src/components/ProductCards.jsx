import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'


const ProductCards = () => {
  const { products, cart, addToCart } = useContext(ShopContext)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', ...new Set(products.map(product => product.category))]

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory)

  return (
    <div>
        <h1 className='flex justify-center font-serif font-semibold text-3xl m-2 p-5'>New Deals</h1>
    <div className='flex flex-row gap-3 rounded-lg p-20'>
     
      <div>
        
        <img src="https://images.ctfassets.net/86of3mjdn78g/3xe56s8QA7VBVaeaBFqxBS/a2c1364d3766de9340385d24a3ca851b/10_electronic_brands_avex_Banner.jpg" alt="" className='rounded-3xl'/>
        <span>name</span>
        <p>offer</p>
        </div>
        <div>
        <img src="https://images.ctfassets.net/86of3mjdn78g/3xe56s8QA7VBVaeaBFqxBS/a2c1364d3766de9340385d24a3ca851b/10_electronic_brands_avex_Banner.jpg" alt="" className='rounded-3xl'/>
        <span>name</span>
        <p>offer</p>
        </div>
        <div>
        <img src="https://images.ctfassets.net/86of3mjdn78g/3xe56s8QA7VBVaeaBFqxBS/a2c1364d3766de9340385d24a3ca851b/10_electronic_brands_avex_Banner.jpg" alt="" className='rounded-3xl' />
        <span>name</span>
        <p>offer</p>
        </div>
        <div>
        <img src="https://images.ctfassets.net/86of3mjdn78g/3xe56s8QA7VBVaeaBFqxBS/a2c1364d3766de9340385d24a3ca851b/10_electronic_brands_avex_Banner.jpg" alt="" className='rounded-3xl'/>
        <span>name</span>
        <p>offer</p>
        </div>
    </div>
    <h1 className='flex justify-center font-serif font-semibold text-3xl m-2'>Best Gadgets & Appliances</h1>
    <div className='flex rounded-3xl'>
        
        <div className='bg-pink-50 p-5 m-3 rounded-3xl'>
            <img src="https://images.ctfassets.net/86of3mjdn78g/3xe56s8QA7VBVaeaBFqxBS/a2c1364d3766de9340385d24a3ca851b/10_electronic_brands_avex_Banner.jpg" alt="" />
            <span>Durable material</span>
            <p>Price</p>

        </div>
        <div className='bg-pink-50 p-5 m-3 rounded-3xl'>
            <img src="https://images.ctfassets.net/86of3mjdn78g/3xe56s8QA7VBVaeaBFqxBS/a2c1364d3766de9340385d24a3ca851b/10_electronic_brands_avex_Banner.jpg" alt="" />
            <span>Durable material</span>
            <p>Price</p>

        </div>
    </div>

    <h1 className='flex justify-center font-serif font-semibold text-3xl m-2'> Check more items</h1>
    <div className='flex flex-row gap-20 justify-center items-center m-5 p-5 rounded-3xl'>
    <div className='grid grid-cols-2 gap-4 rounded-3xl'>
<div className='rounded-3xl'><img src="https://www.schott.com/-/media/project/onex/shared/teasers/consumer-electronics/consumer-electronics_01-displays_00_720x450.jpg?rev=fe6df7a508644a7d8e294e6c294a317b" alt=""  className='rounded-3xl'/></div>
<div className='rounded-3xl'><img src="https://www.schott.com/-/media/project/onex/shared/teasers/consumer-electronics/consumer-electronics_01-displays_00_720x450.jpg?rev=fe6df7a508644a7d8e294e6c294a317b" alt="" className='rounded-3xl' /></div>

<div className='rounded-3xl'><img src="https://www.schott.com/-/media/project/onex/shared/teasers/consumer-electronics/consumer-electronics_01-displays_00_720x450.jpg?rev=fe6df7a508644a7d8e294e6c294a317b" alt=""  className='rounded-3xl'/></div>
<div className='rounded-3xl'><img src="https://www.schott.com/-/media/project/onex/shared/teasers/consumer-electronics/consumer-electronics_01-displays_00_720x450.jpg?rev=fe6df7a508644a7d8e294e6c294a317b" alt="" className='rounded-3xl' /></div>

    </div>

    <div className=' grid grid-cols-2 gap-4'>
<div className=''><img src="https://www.schott.com/-/media/project/onex/shared/teasers/consumer-electronics/consumer-electronics_01-displays_00_720x450.jpg?rev=fe6df7a508644a7d8e294e6c294a317b" alt="" className='rounded-3xl'/></div>
<div className=''><img src="https://www.schott.com/-/media/project/onex/shared/teasers/consumer-electronics/consumer-electronics_01-displays_00_720x450.jpg?rev=fe6df7a508644a7d8e294e6c294a317b" alt="" className='rounded-3xl'/></div>

<div className=''><img src="https://www.schott.com/-/media/project/onex/shared/teasers/consumer-electronics/consumer-electronics_01-displays_00_720x450.jpg?rev=fe6df7a508644a7d8e294e6c294a317b" alt="" className='rounded-3xl'/></div>
<div className=''><img src="https://www.schott.com/-/media/project/onex/shared/teasers/consumer-electronics/consumer-electronics_01-displays_00_720x450.jpg?rev=fe6df7a508644a7d8e294e6c294a317b" alt="" className='rounded-3xl'/></div>

    </div></div>
    </div>
  )
}

export default ProductCards
