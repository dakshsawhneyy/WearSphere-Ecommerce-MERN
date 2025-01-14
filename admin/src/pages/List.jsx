import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { backend_url, currency } from '../App'

const List = ({token}) => {
    
    // First we need to get data from api and store it in state variable
    const [list, setList] = useState([])

    // We will run this fxn whenever this page is loaded to get all the items by calling the api
    const fetchList = async() => {
        try {
            const response = await axios.get(backend_url + `/api/product/list`)
            if (response.data.success) {
                setList(response.data.products)
            } else {
                toast.error(response.data.message)
            }
            //console.log(response.data)
        } catch (error) {
            toast.error(error)
        }
    }

    const removeProduct = async(id) => {
        try {
            const response = await axios.post(backend_url+`/api/product/remove`,{id},{headers:{token}}) // it is one of admin features so it requires token
            if (response.data.success) {
                toast.success(response.data.message)
                // After deleteing product our list is updated so call function of list
                await fetchList();
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        fetchList();
        console.log(token)
    }, [])

return (
    <>
        <p className='mb-4 text-2xl font-semibold'>All Products</p>
        <div className=''>
            {/* ------ List Table Title ------- */}
            <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] bg-gray-100 border-2 p-2 items-center text-sm'>
                <b>image</b>
                <b>Name</b>
                <b>Category</b>
                <b>Price</b>
                <b className='text-center'>Action</b>
            </div>
            
            {/* ------- Product List ------ */}
            {
                list.map((item,index)=>(
                    <div key={index} className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr] bg-white border-b-2 border-l-2 border-r-2 p-2 drop-shadow-md items-center my-2'>
                        <img src={item.image[0]} className='w-16 cover' alt="" />
                        <p className='text-xs sm:text-md pl-3'>{item.name}</p>
                        <p className='text-xs sm:text-md'>{item.category}</p>
                        <p>{currency}{item.price}</p>
                        <p onClick={()=>removeProduct(item._id)} className='text-center bg-red-600 rounded h-8 flex w-8 ml-auto mr-auto justify-center items-center text-white cursor-pointer'>X</p>
                    </div>
                ))
            }
        </div>
    </>
)
}

export default List