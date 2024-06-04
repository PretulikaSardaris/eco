import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRegUserCircle } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { ImCross } from "react-icons/im";


const Navbar = () => {

  const[menu , setMenu] = useState(false)

  const handleCLick = () => {
    setMenu(!menu)
    
  }
  return (
     <nav className='flex justify-between items-center bg-[#FFFFFF] p-1 md:p-2 fixed top-0 left-0 w-full h-15 z-30 '>
      <Link to='/' href="#" className='flex items-center gap-5 ml-5  hover:border-2 border-indigo-200'>
        
        <img className='w-12 ml-0' src="https://banner2.cleanpng.com/20180519/jjs/kisspng-e-commerce-logo-electronic-business-5b00d2d0918d84.2335269315267806245962.jpg" alt="" />
        <span className='block font-bold text-lg text-blue-700'>e-commerce</span>
        
      </Link>
      

      <div id='nav-menu' className='hidden md:flex p-2 gap-5 mr-10 '>
       
        <Link to="/Login" className='hover:border-2 border-indigo-200'>
        <FaRegUserCircle size={30} hover:color='#5AB2FF'/>Login</Link>
        <Link className='hover:border-2 border-indigo-200' to="/CartPage">
        <FaCartArrowDown size={30} hover:color='#5AB2FF' />Cart</Link>
        
<Link to='/' className='hover:border-2 border-indigo-200'>
        <MdOutlineContactSupport size={30} hover:color='#5AB2FF '/>Support
        </Link>

       </div>
       <div className='md:hidden cursor-pointer z-20'>
       <button className='p-1 mr-4 md:hidden z-40' onClick={handleCLick}>
        {menu ? <ImCross /> : <IoMenu size={25} />}
       </button>
        
        </div>
        <div className={`absolute top-0 right-10 w-1/ z-10 bg-pink-50 opacity-75 p-5 rounded-b-xl text-center transform ${menu ? 'block' : 'hidden'} md:hidden`}>
       
       <Link to="/Login" className='hover:text-gray-700 border-indigo-200 text-xl'>
       <FaRegUserCircle size={25} hover:color='#5AB2FF '/>Login</Link>
       <Link className=' border-indigo-200  text-xl hover:text-gray-700' to="/CartPage">
       <FaCartArrowDown size={25} hover:color='#5AB2FF' />Cart</Link>
       
<Link to='/' className=' border-indigo-200 text-xl hover:text-gray-700'>
       <MdOutlineContactSupport size={25} hover:color='#5AB2FF '/>Support
       </Link>

      </div>
       
       
     </nav>


    // <div>
    // <div className='flex justify-between gap-20 p-3  bg-[#F6F7C4] text-black font-semibold z-10'>
    //   <div className='flex float-right gap-20'>
    //   <Link to='/ProductPage'>ProductPage</Link>
    //   <Link to='/cart'><IoCartOutline size={25}/>
    //   </Link>
    //   <Link to='/Login'>Login/Register </Link>
      
    //   </div>
    //   <Link to='/' className='float-end'>ShoppingWindow.com</Link>
    // </div>
    
    // </div>
  )
}

export default Navbar
