import React from 'react'
import { assets } from '../assets/assets'
import { Link,NavLink } from 'react-router-dom'
import  { useState } from 'react';



const Navbar = () => {
    const [visible,setVisible] =useState(false);
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <img src={assets.logo} className='w-24' alt="logo" />
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
      <NavLink to='/' className='flex flex-col items-center gap-1' >
        <p>HOME</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
      </NavLink>
       <NavLink to='/collection' className='flex flex-col items-center gap-1' >
        <p>COLLECTION</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
      </NavLink>
       <NavLink to='/about' className='flex flex-col items-center gap-1' >
        <p>ABOUT</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
      </NavLink>
       <NavLink to='/contact' className='flex flex-col items-center gap-1' >
        <p>CONTACT</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
      </NavLink>
      </ul>
      <div className='flex item-center gap-6'>
        <img src={assets.searchicon} className='w-5 cursor-pointer' alt="user" />
      <div className='group relative'>
        <img src={assets.profileicon} className='w-5 cursor-pointer' alt="profile" />
        <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
       <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
        <p className='cursor-pointer hover:text-black'>My Profile</p>
        <p className='cursor-pointer hover:text-black'>Orders</p>
        <p className='cursor-pointer hover:text-black'>Logout</p>
       </div>
        </div>
        
      </div>
      <Link to ='/cart' className='relative'>
       <img src={assets.carticon} className="w-5 min-w-5" alt="cart" />
  <p className="absolute right-[-5px] bottom-[-5px] w-4 h-4 text-center leading-4 bg-black text-white rounded-full text-[8px]">
    10
  </p>
      
      </Link>
      <img onClick ={()=>setVisible(true)}src={assets.menuicon} className='w-5 cursor-pointer sm:hidden' alt="menu" />
      </div>
      {/* sidebar menu in small screens */}
     <div
  className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
    <div className='flex flex-col text-gray-600'>
        <div onClick={()=>setVisible(false)} className='flex item-center gap-4 p-3'>
            <img className='h-4 rotate-180' src={assets.back} alt=" " />
            <p>Back</p>
        </div>
        <NavLink className='py-2 pl-6 border' to='/'>HOME</NavLink>
        <NavLink className='py-2 pl-6 border'to='/collection'>COLLECTION</NavLink>
        <NavLink className='py-2 pl-6 border'to='/about'>ABOUT</NavLink>
        <NavLink className='py-2 pl-6 border'to='/contact'>CONTACT</NavLink>
    </div>


      </div>
    </div>
  )
}

export default Navbar
