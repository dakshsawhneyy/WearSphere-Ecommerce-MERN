import userModel from "../models/userModel"


// add products to user cart
const addToCart = async(req,res) => {
    try {
        const {userId, itemId, size} = req.body
        
        const userData = await userModel.findById(userId)
        
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
        await userModel.findByIdAndUpdate(userId,{cartData})

        res.json({ success:true,message:"Added to cart" })

    } catch (error) {
        console.log(error)
        res.json({ success:false,message:error.message })
    }
}

// update user cart
const updateCart = async(req,res) => {

}

const getUserCart = async(req,res) => {

}

export { addToCart,updateCart,getUserCart }