import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { backend_url } from '../App'

const List = () => {
    
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

    useEffect(() => {
        fetchList();
    }, [])

return (
    <>
        
    </>
)
}

export default List
