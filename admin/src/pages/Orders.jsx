import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { backend_url, currency } from '../App'
import {toast} from 'react-toastify'
import { assets } from '../assets/assets'

const Orders = ({token}) => {

    const [orders, setOrders] = useState([])    // all orders will be stored in this state  

    const fetchAllOrders = async() => {
        if (!token) {
            // if token is not present terminate this function
            return null;
        }
        
        try {
            const response = await axios.post(backend_url + '/api/order/list',{},{headers:{token}})
            if(response.data.success){
                setOrders(response.data.orders)
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const statusHandler = async(event,orderId) => {
        try {
            const response = await axios.post(backend_url + '/api/order/status',{orderId, status:event.target.value},{headers:{token}}) // it is admin feature so we require token in this
            if (response.data.success) {
                await fetchAllOrders();
            }else{
                console.log(error)
            }
        } catch (error) {
            toast.error(response.data.message)
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchAllOrders();   // run this fxn whenever page gets loaded
    },[])

return (
    <div>
        <h3 className='text-xl'>Order Page</h3>
        <div className=''>
            {
                orders.map((order,index) => (
                    <div key={index} className='border text-sm sm:text-xs lg:text-base gap-5 mt-5 flex flex-col sm:flex-row p-3 sm:p-8 justify-between md:items-center'>
                        <img src={assets.parcel_icon} className='w-20 md:w-auto' alt="" />
                        <div>
                            { /* orders have  items in that and then name so making one more map*/}
                            <div className=''>
                                {order.items.map((item,index)=>{
                                    if(index === order.items.length - 1){   //If it is last item then we will display it different
                                        return <p key={index}>{item.name} x {item.quantity} <span> {item.size} </span></p>
                                    }else{
                                        return <p key={index}>{item.name} x {item.quantity} <span> {item.size} </span>,</p>
                                    }
                                })}
                            </div>
                            <p className='md:my-3 font-semibold text-black'>Name: {order.address.firstName + " " + order.address.lastName}</p>
                            <div>
                                <p>Street : {order.address.street + ","}</p>
                                <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}</p>
                            </div>
                            <p>Mobile Number: +91 {order.address.phone}</p>
                        </div>
                        <div>
                            <p>Items : {order.items.length} </p>
                            <p className='md:my-2'>Method : {order.paymentMethod}</p>
                            <p className='md:my-2'>Payment : {order.payment ? 'Done' : 'Pending'}</p>
                            <p>Date : {new Date(order.date).toLocaleDateString()}</p>
                        </div>
                        <p className='text-black font-bold'>{currency}{order.amount}</p>
                        <select onChange={(event) => statusHandler(event,order._id)} value={order.status} className='py-2 px-1 border font-semibold'>
                            <option value="Order Placed">Order Placed</option>
                            <option value="Packing">Packing</option>
                            <option value="Shipped">Shipped</option>
                            <option value="Out for delivery">Out for delivery</option>
                            <option value="Delivered">Delivered</option>
                        </select>
                    </div>
                ))
            }
        </div>
    </div>
)
}

export default Orders