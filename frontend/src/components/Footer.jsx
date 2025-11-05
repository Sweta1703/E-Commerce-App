import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} alt="logo" className='w-32 mb-5'/>
            <p className='w-full md:w-2/3 text-gray-600'>
              Made with ❤️ for your everyday fashion.<br />
              Stay stylish, stay Forever.
            </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-3 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-3 text-gray-600'>
                <li>+1-212-555-0123</li>
                <li>contact@foreveryou.com</li>
            </ul>
        </div>
      </div>
        <div>
            <hr className='my-5'/>
            <p className='py-5 text-sm text-center'>Copyright 2025@ forever.com - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
