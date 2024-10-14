import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const SearchBar = () => {
    const { search,setSearch,showSearch,setShowSearch } = useContext(ShopContext)
    const location = useLocation();
    const [visible, setVisible] = useState(false);

    useEffect(()=>{
        // agr collection page pe ho aur showSearch true ho tbhi search bar show krna wrna nahi 
        if(location.pathname.includes('collection')){
            setVisible(true)
        }else{
            setVisible(false)
        }
    },[location])

// Added logic that if showSearch is true than only this searchBar would be displayed
return showSearch && visible ? (
    <div className='border-t border-b flex items-center p-3 mt-5 bg-gray-50 justify-center gap-5'>
        <div className='flex items-center px-5 py-3 border rounded-full w-3/4 sm:w-1/2'>
            <input value={search} onChange={(e) => setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm text-gray-800' type="text" placeholder='Search' />
            <img src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
        </div>
        <img src={assets.cross_icon} onClick={() => setShowSearch(false)} className='w-4 h-4 cursor-pointer' alt="" />
    </div>
) : null
}

export default SearchBar
