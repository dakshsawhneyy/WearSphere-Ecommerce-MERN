import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from "react-router-dom";

const ProductItems = ({id,image,name,price}) => {
    const { currency } = useContext(ShopContext)
return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer '>
        <div className='overflow-hidden'>
            <img src={image[0]} className='rounded hover:scale-105 hover:rotate-2 sm:hover:scale-110 duration-300 hover:shadow-[0_0px_50px_rgba(0,0,0,0.15)]' alt="" />
        </div>
        <p className='text-sm font-semibold mt-2 text-gray-500 hover:text-gray-700 transition-colors duration-200'>{name}</p>
        <p className='text-lg text-gray-900'>{currency}{price}</p>
    </Link>
) 
}

export default ProductItems
