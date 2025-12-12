import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
<div className="mt-20 px-6 w-full flex justify-center">
  <div className="w-full max-w-5xl">

    <div className="flex flex-col sm:flex-row justify-between gap-10 py-10">

      {/* Left Section */}
      <div className='sm:w-1/2'>
        <img src={assets.logo} className='w-28 mb-4' alt="logo" />
        <p className='text-gray-600 leading-relaxed'>
          Your go-to destination for trendy fashion, affordable styles, and the latest
          collections. Shop confidently with quality you can trust.
        </p>
      </div>

      {/* Right Section */}
      <div className='flex gap-24'>  {/* <-- Increased space here */}

        {/* Company */}
        <div className='flex flex-col gap-2'>
          <p className='text-lg font-semibold'>Company</p>
          <p className='text-gray-600 hover:text-black cursor-pointer'>Home</p>
          <p className='text-gray-600 hover:text-black cursor-pointer'>About Us</p>
          <p className='text-gray-600 hover:text-black cursor-pointer'>Products</p>
          <p className='text-gray-600 hover:text-black cursor-pointer'>Contact</p>
        </div>

        {/* Contact */}
        <div className='flex flex-col gap-2'>
          <p className='text-lg font-semibold'>Get in Touch</p>
          <p className='text-gray-600'>+1-212-456-7890</p>
          <p className='text-gray-600'>contact@foreveryou.com</p>
        </div>

      </div>
    </div>

    {/* Bottom */}
    <div className='border-t pt-5 text-center text-gray-500 text-sm'>
      © 2025 YourStore — All rights reserved.
    </div>

  </div>
</div>


  )
}

export default Footer
