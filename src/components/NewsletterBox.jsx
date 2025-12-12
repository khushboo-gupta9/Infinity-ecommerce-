import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler =(event) =>{
        event.preventDefault();

    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>
          Get fashion updates, new launches & exclusive discounts every week!  
        </p>
        <form onSubmit={onSubmitHandler}className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6'>
  <input type="email" placeholder='Enter your email'className='border border-blue-400 rounded-full px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'/>
  <button type="submit" className='bg-blue-500 text-white rounded-full px-6 py-2 hover:bg-blue-400 transition duration-300'>Subscribe</button>
</form>

    </div>
  )
}

export default NewsletterBox
