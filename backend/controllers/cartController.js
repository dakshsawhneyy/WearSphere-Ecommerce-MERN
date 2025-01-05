import userModel from "../models/userModel.js"

// add products to user cart //! It is only used to add data in mongoDB
const addToCart = async(req,res) => {
    try {
        const {userId, itemId, size} = req.body
        
        const userData = await userModel.findById(userId);
        let cartData = await userData.cartData  // we gonna perform operation of cartdata so used let

        // check if that item is already available
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }else{
                cartData[itemId][size] = 1;
            }
        }else{
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }

        // we have to add updated cart data in user cart data
        await userModel.findByIdAndUpdate(userId,{cartData});
        res.json({ success:true,message:"Added to cart" })

    } catch (error) {
        console.log(error)
        res.json({ success:false,message:error.message })
    }
}

// update user cart
const updateCart = async(req,res) => {
    try {
        const { userId,itemId,size,quantity } = req.body    // we'll get userId from middleware

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData  

        cartData[itemId][size] = quantity

        // Storing cartData in the database
        await userModel.findByIdAndUpdate(userId,{cartData})
        res.json({ success:true,message:"Cart Updated" })

    } catch (error) {
        console.log(error)
        res.json({ success:false,message:error.message })
    }
}

const getUserCart = async(req,res) => {
    try {
        const { userId } = req.body     // using this we will find user and their cart data
        
        // We will store user cart data and store it in cartData variable
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData  

        res.json({ success:true, cartData})

    } catch (error) {
        console.log(error)
        res.json({ success:false,message:error.message })
    }
}

//! Now we will link ths api with our frontend

export { addToCart,updateCart,getUserCart }