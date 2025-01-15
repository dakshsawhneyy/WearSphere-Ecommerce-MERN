import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Placing orders using COD
const placeOrderCOD = async(req,res) => {
    try {
        const { userId,items,amount,address } = req.body;
        
        //* Make order data object as per orderModel
        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "COD",
            payment:false,
            date: Date.now()
            
        }
        
        const newOrder = new orderModel(orderData)
        await newOrder.save()
        
        // After order is saved or placed, we need to reset user cartData
        await userModel.findByIdAndUpdate(userId,{cartData:{}})
        
        res.json({success:true,message:"Order Placed"})
    
    } catch (error) {
        res.json({success:false,message:error.message})
        console.log(error)
    }
}

// Placing orders using Stripe
const placeOrderStripe = async(req,res) => {

}

// Placing orders using RazerPay
const placeOrderRazorpay = async(req,res) => {

}

// All Orders data for admin panel
const allOrders = async(req,res) => {
    try {
        const orders = await orderModel.find({})    // fetch all orders from all users
        res.json({success:true,orders})
    } catch (error) {
        res.json({success:false,message:error.message})
        console.log(error)
    }
}

// User Order data for frontend // view all orders of user on frontend
const userOrders = async(req,res) => {
    try {
        // fetching userIc from req.body
        const { userId } =  req.body
        const orders = await orderModel.find({userId})
        res.json({success:true,orders})
    } catch (error) {
        res.json({success:false,message:error.message})
        console.log(error)
    }
}

// update order status from admin panel. Only admin can update the status   // *Shows current status and change status to mongoDB from admin
const updateStatus = async(req,res) => {
    try {
        // get  orderId and order status from req.body
        const { orderId,status } = req.body     // we will get orderId and status when we will hit the api //* we add these things in out api so when we hit api we will get it automatically
        
        await orderModel.findByIdAndUpdate(orderId,{ status })  // whatever status we will provide here will be automatically gets saved in database for that orderId
        res.json({success:true,message:'Status Updated'})
    } catch (error) {
        res.json({success:false,message:error.message})
        console.log(error)
    }
}

export { placeOrderCOD,placeOrderRazorpay,placeOrderStripe,allOrders,userOrders,updateStatus }