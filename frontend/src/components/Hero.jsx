import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Hero = () => {
return (
    <div className='flex flex-col sm:flex-row border-2 rounded border-gray-400 items-center my-10'>
        <div className='sm:w-1/2 w-full flex flex-col items-center text-[#414141] dark:text-white'>
            <div className='flex flex-col py-10 sm:py-0 gap-2'>
                <div className='flex items-center gap-3'>
                    <hr className='w-12 h-0.5 border-none rounded bg-[#414141]'></hr>
                    <p>OUR BESTSELLERS</p>
                </div>
                <h2 className='text-3xl sm:text-3xl md:text-5xl prata-regular'>Latest Arrivals</h2>
                <div className='flex items-center gap-3'>
                    <p>SHOP NOW</p>
                    <hr className='w-12 h-0.5 border-none rounded bg-[#414141]'></hr>
                </div>
            </div>
        </div>
        <img src={assets.hero_img} className='sm:w-1/2 w-full' alt="" />
    </div>
)
}

export default Hero
