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

    useEffect(()=>{
        fetchAllOrders();   // run this fxn whenever page gets loaded
    },[])

return (
    <div>
        <h3>Order Page</h3>
        <div>
            {
                orders.map((order,index) => (
                    <div key={index}>
                        <img src={assets.parcel_icon} alt="" />
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
                            <p>{order.address.firstName + " " + order.address.lastName}</p>
                            <div>
                                <p>Street : {order.address.street + ","}</p>
                                <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}</p>
                            </div>
                            <p>{order.address.phone}</p>
                        </div>
                        <div>
                            <p>Items : {order.items.length} </p>
                            <p>Method : {order.paymentMethod}</p>
                            <p>Payment : {order.payment ? 'Done' : 'Pending'}</p>
                            <p>Date : {new Date(order.date).toLocaleDateString()}</p>
                        </div>
                        <p>{currency}{order.amount}</p>
                        <select>
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