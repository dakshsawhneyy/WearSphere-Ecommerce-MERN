import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
return (
    <div className='flex justify-between px-16 py-2'>
        <img src={assets.logo} className='w-40' alt="" />
        <button className='bg-gray-600 h-8 px-4 text-white rounded'>Log Out</button>
    </div>
)
}

export default Navbar
