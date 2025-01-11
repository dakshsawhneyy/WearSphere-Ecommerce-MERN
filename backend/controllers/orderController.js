import orderModel from "../models/orderModel.js";

// Placing orders using COD
const placeOrderCOD = async(req,res) => {

}

// Placing orders using Stripe
const placeOrderStripe = async(req,res) => {

}

// Placing orders using RazerPay
const placeOrderRazorpay = async(req,res) => {

}

// All Orders data for admin panel
const allOrders = async(req,res) => {

}

// User Order data for frontend
const userOrders = async(req,res) => {

}

// update order status from admin panel. Only admin can update the status
const updateStatus = async(req,res) => {

}

export { placeOrderCOD,placeOrderRazorpay,placeOrderStripe,allOrders,userOrders,updateStatus }