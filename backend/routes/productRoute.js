import express from "express";
import { addProduct,listProducts,removeProduct,singleProduct } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post('/add',addProduct);
productRouter.get('/list',listProducts);
productRouter.delete('/remove',removeProduct);
productRouter.post('/single',singleProduct);

export default productRouter;