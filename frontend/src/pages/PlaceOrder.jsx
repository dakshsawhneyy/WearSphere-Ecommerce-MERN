import React from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/frontend_assets/assets'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const PlaceOrder = () => {
    const [method, setMethod] = useState('cod');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

return (
    <div className='w-full pt-20 border-t-2 mt-2 flex sm:flex-row flex-col '>
        {/* ----- Left Side ----- */}
        <div className='w-full sm:w-1/2 '>
            <div className=''>
                <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col mt-8 gap-5 text-black'>
                <div className='flex justify-between flex-col sm:flex-row gap-5 sm:gap-0'>
                    <input type="text" className='border py-2 px-5 text-lg rounded' placeholder='First name' required/>
                    <input type="text" className='border py-2 px-5 text-lg rounded' placeholder='Last name' required/>
                </div>
                <input type="text" className='border py-2 px-5 text-lg rounded ' placeholder='Email adress' required/>
                <input type="text" className='border py-2 px-5 text-lg rounded ' placeholder='Street' required/>
                <div className='flex justify-between flex-col sm:flex-row gap-5 sm:gap-0'>
                    <input type="text" className='border py-2 px-5 text-lg rounded' placeholder='City' required/>
                    <input type="text" className='border py-2 px-5 text-lg rounded' placeholder='State' required/>
                </div>
                <div className='flex justify-between flex-col sm:flex-row gap-5 sm:gap-0'>
                    <input type="text" className='border py-2 px-5 text-lg rounded' placeholder='Zipcode' required/>
                    <input type="text" className='border py-2 px-5 text-lg rounded' placeholder='Country' required/>
                </div>
                <input type="text" className='border py-2 px-5 text-lg rounded' placeholder='Phone' required/>
            </form>
        </div>
        {/* ----- Right Side ----- */}
        <div className='w-full sm:w-1/2 flex flex-col'>
            <div className='mb-10 w-full ml-auto md:pl-28 mt-10 sm:mt-0'>
                <CartTotal />
            </div>
            <div className='sm:pl-28 flex flex-col'>
                <Title text1={'PAYMENT'} text2={'METHOD'} />
                <div className='flex gap-2 sm:gap-6 mt-8 justify-between'>
                    <div onClick={()=>setMethod('stripe')} className='border flex px-5 py-1 cursor-pointer hover:bg-gray-300 transition-all duration-500 hover:scale-125 rounded items-center'>
                        <div className=''>
                            <img src={assets.stripe_logo} className='w-16' alt="" />
                        </div>
                    </div>
                    <div onClick={()=>setMethod('razor')} className='border flex sm:px-5 px-3 py-1 cursor-pointer hover:bg-gray-300 transition-all duration-500 hover:scale-125 rounded items-center flex-1'>
                        <div>
                            <img src={assets.razorpay_logo} className='w-28' alt="" />
                        </div>
                    </div>
                    <div onClick={()=>setMethod('cod')} className='active:bg-gray-300 border flex sm:px-5 px-2 py-1 justify-between cursor-pointer hover:bg-gray-300 transition-all duration-500 hover:scale-125 rounded items-center text-sm'>
                        <p className='text-black'>Cash On Delivery</p>
                    </div>
                </div>
            </div>
            <div className='ml-auto mt-8'>
                <NavLink to={'/orders'}><button type="submit" className='bg-black text-gray-300 hover:bg-gray-300 hover:text-gray-800 hover:scale-110 hover:drop-shadow-2xl transition-all duration-300 px-4 py-2 rounded'>PLACE ORDER</button></NavLink>
            </div>
        </div>
    </div>
)
}

export default PlaceOrder
