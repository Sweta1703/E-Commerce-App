import React from 'react'
import { assets } from '../assets/assets';

const Ourpolicy = () => {
  return (
    <div className='flex flex-col sm-flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="Exchange Policy" />
            <p className='font-semibold'>Easy Exchange</p>
            <p className='text-gray-600'>We offer a hassle-free exchange policy for all our products.</p>
        </div>
        <div>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="Quality Policy" />
            <p className='font-semibold'>7 Days Return Policy</p>
            <p className='text-gray-600'>We provide 7 days free return policy</p>
        </div>
        <div>
            <img src={assets.support_img} className='w-12 m-auto mb-5' alt="Support Policy" />
            <p className='font-semibold'>24/7 Customer Support</p>
            <p className='text-gray-600'>Our support team is available 24/7 to assist you with any inquiries.</p>
        </div>
      
    </div>
  )
}

export default Ourpolicy
