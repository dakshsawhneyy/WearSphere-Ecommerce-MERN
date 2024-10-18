import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
    const {productId} = useParams(); // to get id from the url  // use same productId as in app.jsx
    const {products,currency} = useContext(ShopContext);
    const [productData, setProductData] = useState(false);  // making state for displaying data based on id.. in setProductData mapping data of item.id
    const [image, setImage] = useState('');     // for storing first image of productData to display first image initially
    const [size, setSize] = useState('');
    const [showDesc, setShowDesc] = useState(true);
    // console.log(productId);

    const fetchProductData = async() => {
        // products ke andr individual items ko map krke product id aur assets id match krke data dedia
        products.map((item)=>{
            if(item._id === productId){
                setProductData(item);   // storing all data based of item._id from assets in setProductData
                setImage(item.image[0]);    // storing first image in setImage  // we can change image by storing item on setImage
                return null;
            }
        })
    }

    useEffect(()=>{
        fetchProductData();
    },[productId,products])

// agr product ka data mil gya toh show krdo wrna data fetch na hua ya other issue hua toh blank white screen show krdo
return productData ? (
    <div className='border-t-2 mt-3'>

        {/* Products Data */}
        <div className=' flex sm:flex-row flex-col pt-8 gap-16'>

            {/* --------Product Images---------- */}
            <div className='flex mt-4 flex-1 flex-col-reverse sm:flex-row gap-8'>
                <div className='flex justify-between w-auto sm:justify-normal flex-row sm:flex-col overflow-x-auto sm:overflow-y-scroll '>
                    {
                        productData.image.map((item,index) => (
                            // for making small changing both height and width and adding object-cover for better display
                            <img onClick={()=>setImage(item)} src={item} key={index} className='w-28 object-cover h-28 sm:w-full flex-shrink-0 mb-3 cursor-pointer' alt="" />
                        ))
                    }
                </div>
                <div className='w-full sm-w-[80%]'>
                    <img src={image} className='w-full h-auto' alt="" />
                </div>
            </div>

            {/* ----------Product Info---------- */}
            <div className='flex-1'>
                <h1 className='text-3xl text-black font-semibold sm:mt-8'>{productData.name}</h1>
                <div className='flex items-center gap-0.5 mt-2'>
                    <img src={assets.star_icon} alt="" className='w-3 ' />
                    <img src={assets.star_icon} alt="" className='w-3 ' />
                    <img src={assets.star_icon} alt="" className='w-3 ' />
                    <img src={assets.star_icon} alt="" className='w-3 ' />
                    <img src={assets.star_dull_icon} className='w-3 ' alt="" />
                    <p className=' text-black ml-2'> (122)</p>
                </div>
                <p className='text-black text-3xl font-bold mt-5'>{currency} {productData.price}</p>
                <p className='text-gray-500 mt-4 sm:w-4/5'>{productData.description}</p>
                <div className='flex flex-col gap-1 mt-3'>
                    <p className='text-black text-xl '>Select Size</p>
                    <div className='flex gap-2'>
                        {
                            productData.sizes.map((item,index)=>(
                                <button onClick={()=>setSize(item)} key={index} className={`border-2 w-10 h-8 rounded ${item == size ? 'bg-red-600 text-white' : 'bg-gray-100 text-black'}`}>{item}</button>
                            ))
                        }
                    </div>
                </div>
                <button className='bg-black text-white mt-12 px-4 py-2 rounded active:bg-gray-700'>ADD TO CART</button>
                <hr className='w-4/5 mt-5 outline-none'/>
                <div className='mt-4'>
                    <p className='text-gray-500'>100% Original Product</p>
                    <p className='text-gray-500'>Cash on delivery is available on this product</p>
                    <p className='text-gray-500'>Easy return and exchange policy within 7 days</p>
                </div>
            </div>
        </div>

        {/* Products and Review Section */}
        <div className='mt-20'>
            <div className=' flex w-[20vw] items-center'>
                <b onClick={()=>setShowDesc(!showDesc)} className='px-4 py-2 text-black border cursor-pointer'>Description</b>
                <p className='px-4 flex-shrink-0 py-2 text-black border cursor-pointer'>Reviews (122)</p>
            </div>
            <div className={`text-gray-500 mt-5 w-4/5 border p-4 ${showDesc ? 'block' : 'hidden'}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eligendi accusantium ad optio, soluta adipisci corrupti rem, sapiente autem doloremque, laboriosam dolore error placeat explicabo consequatur molestiae accusamus. Iste, veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officiis atque voluptate quam libero esse, ducimus cumque cupiditate distinctio ad cum suscipit fuga est, sunt, assumenda corporis beatae ea unde!
            </div>
        </div>

        {/* Display Related Products*/} {/* Makin another component for displaying related products and passing category as props */}
        <div className=''>
            <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
        </div>
    </div>
) : <div className='opacity-0'> </div>
}

export default Product
