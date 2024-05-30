import React from 'react'
import { Link } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <div>
    <div className='flex justify-between gap-20 p-3  bg-slate-800 text-white'>
      <div className='flex float-right gap-20'>
      <Link to='/'>ProductPage</Link>
      <Link to='/cart'><IoCartOutline size={25}/>
      </Link>
      <Link to='/Login'>Login/Register </Link>
      
      </div>
      <h3 className='float-end'>ShoppingWindow.com</h3>
    </div>
    
    </div>
  )
}

export default Navbar
