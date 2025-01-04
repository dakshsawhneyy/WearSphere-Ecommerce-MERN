import React, { Profiler, useContext, useEffect, useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import ProductItems from '../components/ProductItems'

const Collection = () => {
    const { products,search,showSearch } = useContext(ShopContext)
    const [showFilter, setShowFilter] = useState(true)
    const [filterProducts, setFilterProducts] = useState([])    // filterProducts are used to display all products initially but setFilterProducts are used to display after applying filters
    const [category, setCategory] = useState([])
    const [subCategory, setSubCategory] = useState([])
    const [sortType, setSortType] = useState('relavent')

    const toggleCategory = (e) => {
        // Check if the category is already in the selected categories
        if (category.includes(e.target.value)) {
            // If it is, remove it from the list of selected categories
            setCategory(prev => prev.filter(item => item !== e.target.value));
        } else {
            // If it is not, add it to the list of selected categories
            setCategory(prev => [...prev, e.target.value]);
        }
    }

    const toggleSubCategory = (e) => {
        //Check if subcategory is already in selected categories
        if(subCategory.includes(e.target.value)){
            //If it is already there, remove it from the list of selected categories
            setSubCategory(prev => prev.filter(item => item !== e.target.value))
        }else{ 
            // It it is not there, add it to list of selected categories
            setSubCategory(prev => [...prev, e.target.value])
        }
    }

    // It slices the products based on the categories i.e. removes extra products
    const applyFilter = () => {
        let productsCopy = products.slice();    // making a copy of products slicing after removing filters

        // * Search Bar Functionality
        if(search && showSearch){
            productsCopy= productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        }

        // If category length i.e. category items must be there and then by filter methord include it from assets.jsx
        if(category.length > 0){
            productsCopy = productsCopy.filter(item => category.includes(item.category));
        }

        // If subCategory length i.e. subCategory items must be there and then by filter methord include it from assets.jsx
        if(subCategory.length > 0){
            productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
        }

        // filterProducts are used to display all products initially but setFilterProducts are used to display after applying filters
        setFilterProducts(productsCopy) // when page is reloaded this productsCopy would be initialized
    }

    const sortProducts = () => {
        let fpCopy = filterProducts.slice();
        switch(sortType){
            case 'low-high':
                setFilterProducts(fpCopy.sort((a,b) => (a.price - b.price))) // using sort methord to sort and using arrow function to compare two values difference
                break;
            case 'high-low':
                setFilterProducts(fpCopy.sort((a,b) => (b.price - a.price)))
                break;
            default:
                applyFilter();
        }
    }

    // Removing this because we have added this logic in applyFilter because this means update products when page is reloaded
    // useEffect(()=>{
    //     setFilterProducts(products);
    // },[products])

    useEffect(()=>{
        applyFilter();
    },[category,subCategory,search,showSearch,products])     // whenever any of these items gets updated applyFilter fxn gets executed

    // useEffect(() => {
    //     console.log(category)
    //     console.log(subCategory)
    // },[category,subCategory])

    useEffect(() => {
        sortProducts();
    },[sortType])

return (
    <div className='flex flex-col sm:flex-row gap-5'>
        {/* Filter Options i.e. Left Side */}
        <div className='min-w-60 text-gray-600'>
            <p onClick={()=>setShowFilter(!showFilter)} className='sm:pointer-events-none my-8 font-semibold text-xl flex items-center gap-5'>FILTERS <img src={assets.dropdown_icon} className={`h-3 block sm:hidden ${showFilter ? 'rotate-90' : ''}`} alt="" /></p>
            <div className={`border flex flex-col gap-3 p-3 ${showFilter ? '' : 'hidden'}`}>
                <p className='font-bold'>CATEGORIES</p>
                <p className='flex gap-3'><input type="checkbox" className='cursor-pointer' onChange={toggleCategory} value={'Men'} />MEN</p>
                <p className='flex gap-3'><input type="checkbox" className='cursor-pointer' onChange={toggleCategory} value={'Women'}/>WOMEN</p>
                <p className='flex gap-3'><input type="checkbox" className='cursor-pointer' onChange={toggleCategory} value={'Kids'} />KIDS</p>
            </div>
            <div className={`border flex flex-col gap-3 p-3 mt-5 ${showFilter ? '' : 'hidden'}`}>
                <p className='font-bold'>TYPE</p>
                <p className='flex gap-3'><input type="checkbox" className='cursor-pointer' onChange={toggleSubCategory} value={'Topwear'} />Topwear</p>
                <p className='flex gap-3'><input type="checkbox" className='cursor-pointer' onChange={toggleSubCategory} value={'Bottomwear'} />Bottomwear</p>
                <p className='flex gap-3'><input type="checkbox" className='cursor-pointer' onChange={toggleSubCategory} value={'Winterwear'} />Winterwear</p>
            </div>
        </div>

        {/* Right Side */}
        <div className='flex-1'>
            <div className='flex gap-3 text-2xl justify-between text-gray-700 w-full mt-7'>
                <Title text1={'ALL'} text2={'COLLECTIONS'} />
                <select onChange={(e) => setSortType(e.target.value)} className='border-2 text-sm px-1 sm:px-2 h-10 sm:w-auto w-36 cursor-pointer'>
                    <option value="relavent">Sort by: Relavent</option>
                    <option value="low-high">Sort by: Low to High</option>
                    <option value="high-low">Sort by: High to Low</option>
                </select>
            </div>

            {/* Map Products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-5'>
                {
                    filterProducts.map((item,index) => (
                        <ProductItems key={index} name={item.name} price={item.price} image={item.image} id={item._id} />
                    ))  
                }
            </div> 
        </div>
    </div>
)
}

export default Collection