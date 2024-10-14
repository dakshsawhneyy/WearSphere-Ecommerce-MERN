import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";
import { useState } from "react";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '₹';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');   /// making this state to change state of search when input is done in search
    const [showSearch, setShowSearch] = useState(false)   // making this to show and unshow search bar



    const value = {
        products,currency,delivery_fee,
        search,setSearch,
        showSearch,setShowSearch
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;