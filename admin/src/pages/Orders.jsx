import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { backend_url } from '../App'
import {toast} from 'react-toastify'

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
        
    </div>
)
}

export default Orders
