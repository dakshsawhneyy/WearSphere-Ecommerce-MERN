import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
return (
    <div className='sm:w-[18%] min-h-screen border-r-2'>
        <div className={`flex flex-col gap-4 pt-6 sm:pl-[20%]`}>
            <NavLink to='/add' className='flex border py-2 px-6 gap-5'>
                <img src={assets.add_icon} className='' alt="" />
                <p className='hidden sm:block'>Add Items</p>
            </NavLink>
            
            <NavLink to='/list' className='flex border py-2 px-6 gap-5'>
                <img src={assets.order_icon} className='' alt="" />
                <p className='hidden sm:block'>List Items</p>
            </NavLink>
            
            <NavLink to='/orders' className='flex border py-2 px-6 gap-5'>
                <img src={assets.order_icon} className='' alt="" />
                <p className='hidden sm:block'>Orders</p>
            </NavLink>

        </div>
    </div>
)
}

export default Sidebar
