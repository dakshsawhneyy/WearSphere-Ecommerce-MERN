import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {
    const { currency,getCartAmount,delivery_fee } = useContext(ShopContext);
return (
    <div className='w-full text-black flex flex-col gap-4'>
        <div className=''>
            <Title text1={'CART'} text2={'TOTAL'}/>
        </div>
        <div className='flex justify-between text-black'>
            <p>Subtotal</p>
            <p>{currency}{getCartAmount()}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
            <p>Shipping Fee</p>
            <p>{currency}{delivery_fee}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
            <b>Total</b>
            <b>{currency}{getCartAmount() == 0 ? 0 : getCartAmount() + delivery_fee }.00</b>
        </div>
        <hr />
    </div>
)
}

export default CartTotal
