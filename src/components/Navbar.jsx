
import React, { useContext ,  useEffect,  useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";
import { FaRegSmile } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { ShopContext } from '../context/ShopContext';


const Navbar = () => {
  const { user , username , getTotalItems} = useContext(ShopContext);
  const [menu, setMenu] = useState(false);
  const [totalItems , setTotalItems ]=useState(0)

  useEffect(() => {
    setTotalItems(getTotalItems);
  }, [getTotalItems])

  
  const handleClick = () => {
    setMenu(!menu);
  }

  return (
    <>
      <nav className='flex justify-between items-center bg-[#FFFFFF] p-1 fixed top-0 left-0 w-full z-30 '>
        <Link to='/' className='flex items-center ml-6 hover:border-2 border-indigo-200 gap-3'>
          <img className='w-8 h-8 rounded-full border-b-4 border-pink-900' src="https://cdn.dribbble.com/users/690545/screenshots/2100539/animacija-dribble.gif" alt="Logo" />
          <span className='block font-bold text-2xl uppercase text-purple-900 font-spirax rounded-lg'><span  className='block font-bold text-2xl uppercase text-purple-600 font-spirax rounded-lg'>Purple</span> Shop</span>
        </Link>

        <div id='nav-menu' className='hidden md:flex p-2 gap-5 mr-10'>
 
    {
   user ? (
      <span className='flex items-center gap-2 hover:border-2 border-indigo-200 text-purple-800 font-spirax'>
        <FaRegSmile size={30} />
        <span>Hello {username} </span>
      </span>
  ) : (
    <Link to="/Login" className='flex items-center gap-2 hover:border-2 border-indigo-200 font-spirax text-purple-800'>
    <FaRegUserCircle size={30} />
    <span>Login</span>
  </Link>
  )
 }


          <Link to="/CartPage" className='flex items-center font-spirax hover:border-2 border-indigo-200 text-purple-800'>
            <FaCartArrowDown  size={30} />
            <span className='bg-white text-pink-500 font-bold ring-offset-1 ring-1 rounded-lg mb-5'>{totalItems}</span>
          </Link>

        

          <Link to='/' className='flex items-center gap-2 hover:border-2 border-indigo-200 font-spirax text-purple-800'>
            <MdOutlineContactSupport size={30} />
            <span>Support</span>
          </Link>
        </div>

        <div className='md:hidden cursor-pointer z-40 text-purple-800'>
          <button className='p-1' onClick={handleClick}>
           {menu ? <ImCross size={20} /> : <IoMenu size={30} />}
          </button>
        </div>
      </nav>

      {menu && (
        <>
          <div className='fixed inset-0 bg-black opacity-75 z-20' ></div>
          <div className=' right-10 mr-3 top-1 w-1/2  bg-purple-100 p-10 rounded-b-3xl text-center z-30 fixed text-purple-900'>
            <ul className='space-y-10'>
              <li>
              {
   user ? (
      <span className='flex items-center gap-2 hover:border-2 border-indigo-200 text-purple-800 font-spirax'>
        <FaRegSmile size={30} />
        <span>Hello {username} </span>
      </span>
  ) : (
    <Link to="/Login" className='flex items-center gap-2 hover:border-2 border-indigo-200 font-spirax text-purple-800'>
    <FaRegUserCircle size={30} />
    <span>Login</span>
  </Link>
  )
 }
              </li>
              <li>
                <Link to="/CartPage" className='flex items-center justify-center hover:border-2 border-indigo-100' onClick={handleClick}>
                  <FaCartArrowDown size={30} />
                  <span className='text-pink-500 font-bold ring-offset-1 ring-1 rounded-lg mb-7 mr-5'>{totalItems}</span>
                  
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
