import React, { useContext } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/frontend_assets/assets'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
    const [method, setMethod] = useState('cod');    // making state for displaying green dot in front of payment method

    const navigate = useNavigate();
    const { backendUrl,token,cartItems,setCartItems,getCartAmount,delivery_fee,products} = useContext(ShopContext)

    // Making a state to store the data in delivery information
    const [formData, setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        street:'',
        city:'',
        state:'',
        zipcode:'',
        country:'',
        phone:''
    })

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        setFormData(data => ({...data,[name]:value}))
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
    }

return (
    <form  onSubmit={onSubmitHandler} className='w-full pt-20 border-t-2 mt-2 flex sm:flex-row flex-col '>
        {/* ----- Left Side ----- */}
        <div className='w-full sm:w-1/2 '>
            <div className=''>
                <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
            </div>
            <div className='flex flex-col mt-8 gap-5 text-black'>
                <div className='flex justify-between flex-col sm:flex-row gap-5 sm:gap-0'>
                    <input type="text" onChange={onChangeHandler} name='firstName' value={formData.firstName} className='border py-2 px-5 text-lg rounded' placeholder='First name' required/>
                    <input type="text" onChange={onChangeHandler} name='lastName' value={formData.lastName} className='border py-2 px-5 text-lg rounded' placeholder='Last name' required/>
                </div>
                <input type="text" onChange={onChangeHandler} name='email' value={formData.email} className='border py-2 px-5 text-lg rounded ' placeholder='Email address' required/>
                <input type="text" onChange={onChangeHandler} name='street' value={formData.street} className='border py-2 px-5 text-lg rounded ' placeholder='Street' required/>
                <div className='flex justify-between flex-col sm:flex-row gap-5 sm:gap-0'>
                    <input type="text" onChange={onChangeHandler} name='city' value={formData.city} className='border py-2 px-5 text-lg rounded' placeholder='City' required/>
                    <input type="text" onChange={onChangeHandler} name='state' value={formData.state} className='border py-2 px-5 text-lg rounded' placeholder='State' required/>
                </div>
                <div className='flex justify-between flex-col sm:flex-row gap-5 sm:gap-0'>
                    <input type="text" onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='border py-2 px-5 text-lg rounded' placeholder='Zipcode' required/>
                    <input type="text" onChange={onChangeHandler} name='country' value={formData.country} className='border py-2 px-5 text-lg rounded' placeholder='Country' required/>
                </div>
                <input type="text" onChange={onChangeHandler} name='phone' value={formData.phone}phone className='border py-2 px-5 text-lg rounded' placeholder='Phone' required/>
            </div>
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
                        {method == 'stripe' && <div className='w-2 h-2 rounded-full bg-green-500 ml-2'></div>}
                    </div>
                    <div onClick={()=>setMethod('razor')} className='border flex sm:px-5 px-3 py-1 cursor-pointer hover:bg-gray-300 transition-all duration-500 hover:scale-125 rounded items-center flex-1'>
                        <div>
                            <img src={assets.razorpay_logo} className='w-28' alt="" />
                        </div>
                        {method == 'razor' && <div className='w-2 h-2 rounded-full bg-green-500 ml-2'></div>}
                    </div>
                    <div onClick={()=>setMethod('cod')} className='active:bg-gray-300 border flex sm:px-5 px-2 py-1 justify-between cursor-pointer hover:bg-gray-300 transition-all duration-500 hover:scale-125 rounded items-center text-sm'>
                        <p className='text-black text-lg font-semibold'>Cash On Delivery</p>
                        {method == 'cod' && <div className='w-2 h-2 rounded-full bg-green-500 ml-2'></div>}
                    </div>
                </div>
            </div>
            <div className='ml-auto mt-8'>
                <button type="submit" onClick={()=>navigate('/orders')} className='bg-black text-gray-300 hover:bg-gray-300 hover:text-gray-800 hover:scale-110 hover:drop-shadow-2xl transition-all duration-300 px-4 py-2 rounded'>PLACE ORDER</button>
            </div>
        </div>
    </form>
)
}

export default PlaceOrder