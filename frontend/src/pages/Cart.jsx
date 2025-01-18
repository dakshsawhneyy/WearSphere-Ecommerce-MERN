import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import ProductItems from '../components/ProductItems';
import { assets } from '../assets/frontend_assets/assets';
import CartTotal from '../components/CartTotal';
import { NavLink } from 'react-router-dom';

const Cart = () => {
    const { cartItems,currency,products,updateQuantity } = useContext(ShopContext);
    const [cartData, setCartData] = useState([]);

    useEffect(() => {

        if(products.length > 0){
            const tempData = [];
            for(let items in cartItems){
            for(let item in cartItems[items]){
                if(cartItems[items][item] > 0){
                    tempData.push({
                        _id: items,
                        size: item,
                        quantity: cartItems[items][item]
                    })
                }
            }
        }
        // console.log(tempData)
        setCartData(tempData);
        }
    },[cartItems])

return (
    <>
    <div className='border-t mt-2 pt-14'>
        <div className='text-3xl'>
            <Title text1={'YOUR'} text2={'CART'} />
        </div>
        <div className=''>
            {
                cartData.map((item,index) => {
                    
                    const productData = products.find((product) => product._id == item._id)
                    
                    return(
                        
                            <div key={index} className='border-t  grid grid-cols-[4fr_1fr_0.5fr] sm:grid-cols-[4fr_1fr_0.5fr] items-center py-2'>
                                <div className='mt-6 flex gap-5 text-lg'>
                                    <img src={productData.image[0]} className='w-16' alt="" />
                                    <div className='text-gray-600 gap-4'>
                                        <p>{productData.name}</p>
                                        <div className='flex text-gray-600'>
                                            <p>{currency}{productData.price}</p>
                                            <p className='bg-gray-100 px-1 ml-5 text-gray-700 border border-gray-300 rounded'>{item.size}</p>
                                        </div>
                                    </div>
                                </div>
                                <input onChange={(e) => e.target.value == 0 || e.target.value == '' ? null : updateQuantity(item._id,item.size,Number(e.target.value))} className='border pl-5 py-1 w-12 sm:w-20 text-black' type="number" min={1} defaultValue={item.quantity} />
                                {/* to remove item from cart we just did is put its value of quantity to 0 which removes the item and makes its quantity 0 */}
                                <img onClick={() => updateQuantity(item._id,item.size,0)} src={assets.bin_icon} className='cursor-pointer w-5' alt="" />
                            </div>
                    )
                })
            }
            <hr />
        </div>
        <div className='my-20 flex justify-end w-3/5 sm:w-2/5 ml-auto md:pl-28 flex-col'>
            <CartTotal />
            <div className='ml-auto mt-8'>
                <NavLink to={'/place-order'}><button className='bg-black text-gray-300 hover:bg-gray-300 hover:text-gray-800 hover:scale-110 hover:drop-shadow-2xl transition-all duration-300 px-4 py-2 rounded'>PROCEED TO CHECKOUT</button></NavLink>
            </div>
        </div>
    </div>
    </>
)
}

export default Cart
