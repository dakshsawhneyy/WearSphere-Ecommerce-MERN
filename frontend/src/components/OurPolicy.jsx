import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const OurPolicy = () => {
return (
    <div className='flex flex-col sm:flex-row gap-10 p-10 sm:p-16'>
        <div className='flex flex-col items-center text-center w-full sm:w-1/3'>
            <img src={assets.exchange_icon} className='w-16 sm:w-20' alt="" />
            <p className='text-black mt-5 text-lg font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-500'>We offer hassle free exchange policy</p>
        </div>
        <div className='flex flex-col items-center text-center w-full sm:w-1/3'>
            <img src={assets.quality_icon} className='w-16 sm:w-20' alt="" />
            <p className='text-black mt-5 text-lg font-semibold'>7 Days Return Policy</p>
            <p className='text-gray-500'>We provide 7 days free return policy</p>
        </div>
        <div className='flex flex-col items-center text-center w-full sm:w-1/3'>
            <img src={assets.support_img} className='w-16 sm:w-20' alt="" />
            <p className='text-black mt-5 text-lg font-semibold'>Best customer support</p>
            <p className='text-gray-500'>We provide 24/7 customer support</p>
        </div>
    </div>
)
}

export default OurPolicy
