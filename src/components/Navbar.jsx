
import React, { useContext ,  useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";
import { ShopContext } from '../context/ShopContext';


const Navbar = () => {
  const { user , username } = useContext(ShopContext);
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  }

  return (
    <>
      <nav className='flex justify-between items-center bg-[#FFFFFF] p-4 fixed top-0 left-0 w-full z-30'>
        <Link to='/' className='flex items-center gap-5 ml-10 hover:border-2 border-indigo-200'>
          <img className='w-12' src="https://banner2.cleanpng.com/20180519/jjs/kisspng-e-commerce-logo-electronic-business-5b00d2d0918d84.2335269315267806245962.jpg" alt="Logo" />
          <span className='block font-bold text-lg text-blue-700'>e-commerce</span>
        </Link>

        <div id='nav-menu' className='hidden md:flex p-2 gap-5 mr-10'>
 
    {
   user ? (
      <span className='flex items-center gap-2 hover:border-2 border-indigo-200'>
        <FaRegUserCircle size={30} />
        <span>`Hello ${username}`</span>
      </span>
  ) : (
    <Link to="/Login" className='flex items-center gap-2 hover:border-2 border-indigo-200'>
    <FaRegUserCircle size={30} />
    <span>Login</span>
  </Link>
  )
 }


          <Link to="/CartPage" className='flex items-center gap-2 hover:border-2 border-indigo-200'>
            <FaCartArrowDown size={30} />
            <span>Cart-(no.)</span>
          </Link>
          <Link to='/' className='flex items-center gap-2 hover:border-2 border-indigo-200'>
            <MdOutlineContactSupport size={30} />
            <span>Support</span>
          </Link>
        </div>

        <div className='md:hidden cursor-pointer z-40'>
          <button className='p-1' onClick={handleClick}>
            <IoMenu size={30} />
          </button>
        </div>
      </nav>

      {menu && (
        <>
          <div className='fixed inset-0 bg-black opacity-75 z-20' ></div>
          <div className=' right-10 mr-3 top-1 w-1/2  bg-pink-50 p-10 rounded-b-3xl text-center z-30 fixed'>
            <ul className='space-y-10'>
              <li>
                <Link to="/Login" className='flex items-center gap-2 justify-center hover:border-2 border-indigo-100' onClick={handleClick}>
                  <FaRegUserCircle size={30} />
                  <span>Login</span>
                </Link>
              </li>
              <li>
                <Link to="/CartPage" className='flex items-center gap-2 justify-center hover:border-2 border-indigo-100' onClick={handleClick}>
                  <FaCartArrowDown size={30} />
                  <span>Cart-(no.)</span>
                </Link>
              </li>
              <li>
                <Link to='/' className='flex items-center gap-2 justify-center hover:border-2 border-indigo-100'>
                  <MdOutlineContactSupport size={30} onClick={handleClick}/>
                  <span>Support</span>
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  )
}

export default Navbar;
