import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import ProductItems from '../components/ProductItems';
import { assets } from '../assets/frontend_assets/assets';

const Cart = () => {
    const { cartItems,currency,products,updateQuantity } = useContext(ShopContext);
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
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
        console.log(tempData)
        setCartData(tempData);
    },[cartItems])

return (
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
        </div>
    </div>
)
}

export default Cart
