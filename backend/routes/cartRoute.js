import express from "express";
import { addToCart,updateCart,getUserCart } from "../controllers/cartController";


const cartRouter = express.Router();

userRouter.post('get',getUserCart)
userRouter.post('add',addToCart)
userRouter.post('/update',updateCart)

export default cartRouter