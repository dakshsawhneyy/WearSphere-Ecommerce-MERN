import express from "express";
import { addToCart,updateCart,getUserCart } from "../controllers/cartController";
import authUser from "../middleware/auth";


const cartRouter = express.Router();

userRouter.post('get',authUser,getUserCart)
userRouter.post('add',authUser,addToCart)
userRouter.post('/update',authUser,updateCart)

export default cartRouter