import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItems from './ProductItems';

const RelatedProducts = ({category,subCategory}) => {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]); // for storing items based to categories and related subcategories

    useEffect(()=>{
        if(products.length > 0){
            let productsCopy = products.slice();    // saving all products as copy

            // show items based on that category and sub category by equating category
            productsCopy = productsCopy.filter((item) => category === item.category);
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);

            // console.log(productsCopy.slice(0,5));
            setRelated(productsCopy.slice(0,5));

        }
    },[products])
return (
    <div className='my-24'>
        <div className='text-center py-2'>
            <Title text1={'RELATED'} text2={'CATEGORIES'}/>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-5'>
            {
                related.map((item,index) => (
                    <ProductItems key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
                ))
            }
        </div>
    </div>
)
}

export default RelatedProducts
