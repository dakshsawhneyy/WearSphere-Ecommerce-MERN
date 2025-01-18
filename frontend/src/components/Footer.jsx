import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
return (
    <div className='p-4 mt-24'>
        <div className='grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr] gap-10'>
            <div className='flex flex-col gap-5'>
                <img src={assets.logo} className='w-32' alt="" />
                <p className='text-gray-600 w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat beatae adipisci odit iste, assumenda ab a deserunt unde iusto veniam quaerat exercitationem modi porro quos earum qui atque voluptates quas.</p>
            </div>
            <div className=''>
                <h2 className='text-gray-700 font-semibold text-xl'>COMPANY</h2>
                <div className='text-gray-500 mt-5'>
                        <p>Home</p>
                        <p>Delivery</p>
                        <p>About Us</p>
                        <p>Privacy Policy</p>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <h2 className='text-gray-700 font-semibold text-xl'>GET IN TOUCH</h2>
                <div className='text-gray-500 mt-5'>
                    <p>+1-212-456-7890</p>
                    <p>contact@wearsphere.com</p>
                </div>
            </div>
        </div>
        <hr className='bg-gray-500 my-5'/>
        <p className='text-gray-700 text-center text-xs sm:text-s font-semibold'>Copyright 2024@wearsphere.com - All Right Reserved.</p>
    </div>
)
}

export default Footer