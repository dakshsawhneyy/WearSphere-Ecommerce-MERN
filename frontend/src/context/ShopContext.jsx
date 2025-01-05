import { createContext, useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios'

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '₹';
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [search, setSearch] = useState('');   /// making this state to change state of search when input is done in search
    const [showSearch, setShowSearch] = useState(false)   // making this to show and unshow search bar
    const [cartItems, setCartItems] = useState({});     // {} means emply object and making this state to store cart items data
    // soring products in products state variable
    const [products, setProducts] = useState([])
    // making state to store token for login
    const [token, setToken] = useState('')

    const addToCart = async(itemId,size) => {
        // If size is not selected give an error
        if (!size) {
            toast.warning("please select size");
            return;     // Stop the loop i.e. dont add items to cart is size not found
        }
        // Since cart items are stored in object so using structuredClone fxn which lets us store objects
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            // If that item has already one entry in cart so just increase it by one
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            // else if it doesnot have entry make a new entry of that product
            }else{
                cartData[itemId][size] = 1;
            }
        // If cartData doesnot have any entry make a new entry of it;
        }else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData); //it means cartItems contains only id and size

        //* If user is signed in call the cart api from backend
        if(token){
            try {
                const response = await axios.post(backendUrl + '/api/cart/add',{itemId,size},{headers:{token}})  // due to this data will remain as it is
                console.log(response.data)
            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }

    }

    // making function for storing count in cart icon in navbar for how many products present in cart 
    const getCartCount = () => {
        let totalCount = 0;
        for(let items in cartItems){
            for(let item in cartItems[items]){
                try {
                    if(cartItems[items][item] > 0){
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                    toast.error('Error Occured');
                    console.log(error);
                }
            }
        }
        return totalCount;
    }

    // A function to remove cart Items from list // In addToCart we have taken id and size so here also we'll take the same
    const updateQuantity = async(itemId,size,quantity) => {
        // Sabse pehle ek copy bnao cartItems ki
        const cartData = structuredClone(cartItems);

        cartData[itemId][size] = quantity;

        setCartItems(cartData);

        try {
            const response = await axios.post(backendUrl + '/api/cart/update',{itemId,size,quantity});
            console.log(response.data)
        } catch (error) {
            console.log(error);
            toast.error('error.message');
        }
    }

    // A function to total amount of cart
    const getCartAmount = () => {
        let totalAmount = 0;
        for(let items in cartItems){
            let itemInfo = products.find((product) => product._id == items);
            // If it finds this product then this product data will be stored in itemInfo
            for(let item in cartItems[items]){
                try {
                    if(cartItems[items][item] > 0 ){ //cartItems[items][item] means quanitity of that size
                        totalAmount += itemInfo.price * cartItems[items][item];
                    } 

                } catch (error) {
                    toast.error("Error Occured");
                    console.log(error);
                }
            }
        }
        return totalAmount;
    }

    const getProductData = async() => {
        try {
            // to call api using axios
            const response = await axios.get(backendUrl + '/api/product/list')
            if (response.data.success) {
                setProducts(response.data.products)
            } else {
                toast.error(response.data.message)
            }
            //console.log(response.data)
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    // it is used to list products fetched from api
    useEffect(() => {
        getProductData();
    }, [])

    // if token is available in local storage, store token in token state
    useEffect(()=>{
        // when we refresh page token is refreshed but token is in local storage so give that storage token to token state
        if(!token && localStorage.getItem('token')){
            setToken(localStorage.getItem('token'));
        }
    },[])

    const value = {
        products,currency,delivery_fee,
        search,setSearch,
        showSearch,setShowSearch,
        cartItems,setCartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        backendUrl,
        token,setToken
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;