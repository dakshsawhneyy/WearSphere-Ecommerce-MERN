import React, { useContext, useEffect } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'
import { useState } from 'react';
import axios from 'axios';

const Orders = () => {

    const { backendUrl,token,currency } = useContext(ShopContext);

    const [orderData, setOrderData] = useState([])

    const loadOrderData = async() => {
        try {
            if(!token){
                return null
            }
            
            const response = await axios.post(backendUrl + '/api/order/userorders',{},{headers:{token}})
            if(response.data.success){
                let allOrderItem = [];
                response.data.orders.map((order) => {
                    // there is one more array in data of items name so we need one more mapping
                    order.items.map((item) => {
                        item['status'] = order.status;
                        item['payment'] = order.payment;
                        item['paymentMethod'] = order.paymentMethod;
                        item['date'] = order.date;
                        // Saving all these items in allOrderItems array
                        allOrderItem.push(item);
                    })
                })
                setOrderData(allOrderItem.reverse())    // doing reverse so that latest order will show on top
                // console.log(allOrderItem)
            }
            //console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadOrderData()
    }, [token])
    

return (
    <div className='w-full py-16 border-t-2 mt-2 flex flex-col'>
        <Title text1={'MY'} text2={'ORDERS'} />
        <div className='text-black'>
            {
                orderData.map((item,index) => (
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
