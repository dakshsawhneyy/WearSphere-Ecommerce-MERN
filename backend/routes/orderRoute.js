import express from "express";
import { placeOrderCOD,placeOrderStripe,placeOrderRazorpay,updateStatus,userOrders,allOrders, verifyStripe } from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";


const orderRouter = express.Router();

// Admin Features
orderRouter.post('/list',adminAuth,allOrders)  // Admin panel list all orders
orderRouter.post('/status',adminAuth,updateStatus)  // Admin panel update orders

// Payment Features
orderRouter.post('/place',authUser,placeOrderCOD)
orderRouter.post('/stripe',authUser,placeOrderStripe)   // we need token/userId so we gonna need auth.js middleware
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)

// User features - frontend
orderRouter.post('/userorders',authUser,userOrders)

// verify payment
orderRouter.post('/verifyStripe',authUser,verifyStripe)

export default orderRouter;