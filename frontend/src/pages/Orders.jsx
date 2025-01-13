import React, { useContext } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'

const Orders = () => {
    const { products,currency } = useContext(ShopContext);
return (
    <div className='w-full py-16 border-t-2 mt-2 flex flex-col'>
        <Title text1={'MY'} text2={'ORDERS'} />
        <div className='text-black'>
            {
                products.slice(2,5).map((item,index) => (
                    <div className='flex sm:flex-row flex-col gap-3 sm:gap-0 items-center border-t '>
                        <div key={item._id} className='flex gap-5 py-5 border-t min-w-[350px]'>
                            <div>
                                <img src={item.image} className='w-16' alt="" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <p>{item.name}</p>
                                <div className='flex gap-5'>
                                    <p>{currency}{item.price}</p>
                                    <p>Quantity: 1</p>
                                    <p>Size: M</p>
                                </div>
                                <p>Date: <span>25 July, 2024</span></p>
                            </div>
                        </div>
                        <div className='flex gap-10 mb-3 sm:gap-0 sm:mb-0 justify-between md:w-[50vw] md:pl-56'>
                            <div className='flex items-center gap-2 mr-auto'>
                                <span className='rounded-full h-4 w-4 bg-green-600'></span>
                                <p className='text-lg whitespace-nowrap'>Ready to ship</p>
                                </div>
                            <div className=''>
                                <button className='border px-3 py-2 bg-green-900 rounded text-white'>TRACK ORDER</button>
                            </div>
                        </div>
                        
                    </div>
                ))
            }
            <hr className='border-[1.5px]' />
        </div>
        
    </div>
)
}

export default Orders
