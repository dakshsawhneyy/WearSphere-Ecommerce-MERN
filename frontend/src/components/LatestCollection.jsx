import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItems from './ProductItems';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([])

    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[])

return (
    <div className=''>
        <div className='text-center sm:py-8 text-2xl sm:text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTIONS'} />
            <p className='w-3/4 text-xs sm:text-sm md:text-base mt-3 m-auto text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus sapiente ex qui illum eius deserunt eveniet aut, consectetur tempore </p>
        </div>
        
        {/* Adding Logic to recently added around 10 products in latest collection */}
        <div className='grid grid-cols-2 mt-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            {
                latestProducts.map((item,index)=>(
                    <ProductItems key={index} name={item.name} image={item.image} id={item._id} price={item.price} />
                ))
            }
        </div>
    </div>
)
}

export default LatestCollection
