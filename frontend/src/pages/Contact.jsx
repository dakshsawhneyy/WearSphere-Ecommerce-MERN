import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import Title from '../components/Title'
import SubscribeDiscount from '../components/SubscribeDiscount'

const Contact = () => {
return (
    <div className='border-t-2 mt-2 sm:px-28'>
        <div className='text-center mt-10'>
            <Title text1={'CONTACT'} text2={'US'}/>
        </div>
        <div className='mt-10 flex flex-col sm:flex-row gap-10 mb-16'>
            <img src={assets.contact_img} className='max-w-[550px]' alt="" />
            <div className='flex flex-col gap-8 sm:py-16 text-xl'>
                <p className='text-gray-800 font-semibold'>Our Store</p>
                <div className='text-gray-600'>
                    <p>54709 Willms Station</p>
                    <p>Suite 350, Washington, USA</p>
                </div>
                <div className='text-gray-600'>
                    <p>Tel: (415) 555-0132</p>
                    <p>Email: admin@forever.com</p>
                </div>
                <p className='text-gray-800 font-semibold'>Careers at Forever</p>
                <div className='text-gray-600'>
                    <p>Learn more about our teams and job opening</p>
                </div>
                <button className='bg-black test-white transition-all hover:bg-gray-600 duration-300 hover:scale-110 py-4 w-[40%]'>Explore Jobs</button>
            </div>
        </div>
        <SubscribeDiscount />
    </div>
)
}

export default Contact
