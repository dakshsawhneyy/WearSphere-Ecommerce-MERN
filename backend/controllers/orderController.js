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

// User Order data for frontend
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

// update order status from admin panel. Only admin can update the status
const updateStatus = async(req,res) => {

}

export { placeOrderCOD,placeOrderRazorpay,placeOrderStripe,allOrders,userOrders,updateStatus }