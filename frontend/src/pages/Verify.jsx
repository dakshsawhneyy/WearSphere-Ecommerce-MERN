import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const Verify = () => {

    const navigate = useNavigate();

    const { token, setCartItems, backendUrl } = useContext(ShopContext)
    const [searchParams, setSearchParams] = useSearchParams();  // we need url parameter from above so using this

    const success = searchParams.get('success') // get success from url
    const orderId = searchParams.get('orderId') // get orderId from url

    // We will execute this fxn whenever we will open this page after payment
    const verifyPayment = async() => {
        try {
            // if token is present then only proceed
            if(!token){
                return null;        // It will stop execution
            }
            
            const response = await axios.post(backendUrl + '/api/order/verifyStripe',{orderId,success},{headers:{token}})
            
            if(response.data.success){
                setCartItems({})
                navigate('/orders') //once payment is done, navigate to my orders page
            }else{  // Payment is failed, send user to cart page so they can again do payment
                navigate('/cart');
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        verifyPayment();
    },[token])

return (
    <div>

    </div>
)
}

export default Verify
