import React from 'react'

const ProductCards = () => {
  return (
    <div>
        <h1 className='flex items-center justify-center p-10 font-extrabold '>Deal of the Day</h1>
    <div className='flex flex-row gap-3 rounded-lg p-20'>
     
      <div>
        
        <img src="https://images.ctfassets.net/86of3mjdn78g/3xe56s8QA7VBVaeaBFqxBS/a2c1364d3766de9340385d24a3ca851b/10_electronic_brands_avex_Banner.jpg" alt="" />
        <span>name</span>
        <p>offer</p>
        </div>
        <div>
        <img src="https://images.ctfassets.net/86of3mjdn78g/3xe56s8QA7VBVaeaBFqxBS/a2c1364d3766de9340385d24a3ca851b/10_electronic_brands_avex_Banner.jpg" alt="" />
        <span>name</span>
        <p>offer</p>
        </div>
        <div>
        <img src="https://images.ctfassets.net/86of3mjdn78g/3xe56s8QA7VBVaeaBFqxBS/a2c1364d3766de9340385d24a3ca851b/10_electronic_brands_avex_Banner.jpg" alt="" />
        <span>name</span>
        <p>offer</p>
        </div>
        <div>
        <img src="https://images.ctfassets.net/86of3mjdn78g/3xe56s8QA7VBVaeaBFqxBS/a2c1364d3766de9340385d24a3ca851b/10_electronic_brands_avex_Banner.jpg" alt="" />
        <span>name</span>
        <p>offer</p>
        </div>
    </div>
    <h1 className='flex items-center justify-center p-10 font-extrabold '>Best Gadgets & Appliances</h1>
    <div className='bg-pink-700 flex rounded-3xl'>
        
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
    </div>
  )
}

export default ProductCards
