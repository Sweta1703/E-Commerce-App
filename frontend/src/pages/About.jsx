import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=""/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Founded with a passion for making online shopping effortless and enjoyable, Forever curates a diverse collection of apparel and lifestyle products designed to suit every mood, moment, and personality.</p>
          <p>Our mission is to bring you timeless trends and high-quality essentials that redefine everyday wear, blending comfort, affordability, and elegance into every piece you choose.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission at Forever is to make fashion accessible to everyone — not just as a style statement, but as a form of self-expression. We believe that what you wear should reflect who you are, without compromise on quality or comfort. Every product we curate is a promise of durability, elegance, and individuality — helping you look good, feel confident, and stay ahead of the trends that define tomorrow.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={"WHY"} text2={"CHOOSE US"}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>At Forever, every product goes through a careful quality check to ensure you receive only the best in design, durability, and comfort.</p>
        </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>We make shopping simple and enjoyable by offering a seamless, user-friendly experience from browsing to checkout, right at your fingertips.</p>
        </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our dedicated support team is always ready to assist you, ensuring that every interaction with Forever is smooth, helpful, and satisfying.</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
