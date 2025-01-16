import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from 'stripe'

// creating global variables for stripe
const currency = 'inr';
const deliveryCharge = 10;

// gateway initialisation   // we can use this stripe in this project
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)    // we get secret key from environment variable

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
    try {
        // ? most will be same as COD payment
        // we need product data from req.body
        const { userId,items,amount,address } = req.body;
        const { origin } = req.headers  // ! origin includes frontend url. from which url payment is initiated
        
        //* Make order data object as per orderModel and saving in database
        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "Stripe",
            payment:false,
            date: Date.now()
        }
        
        const newOrder = new orderModel(orderData)
        await newOrder.save()
        
        // creating details or line_items to show services and more money be charged    // adding extra for 1 dollar
        // * Line items are basically details required to happen payment and format stripe understands
        const line_items = items.map((item) => ({
            price_data: {
                currency: currency,
                product_data: {
                    name: item.name
                },
                unit_amount: item.price * 100   // adding dollar in price
            },
            quantity: item.quantity
        }))
        
        // adding delivery charges in line items
        line_items.push({
            price_data: {
                currency: currency,
                product_data: {
                    name: 'Delivery Charges'
                },
                unit_amount: deliveryCharge * 100   // adding dollar in price
            },
            quantity: 1 // we are only adding delivery charges
        })
        
        // by these line items, we can create session where we will define success and failure url
        const session = await stripe.checkout.sessions.create({
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode: 'payment',
        })
        
        res.json({success:true, session_url: session.url})
        
    } catch (error) {
        res.json({success:false,message:error.message})
        console.log(error)
    }
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