import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// function to add product
// To add a product we will create a middleware using multer
const addProduct = async(req,res) => {
    try {
        // console.log(req.files);  // Log to inspect

        const { name,description,price,category,subCategory,sizes,bestseller } = req.body;
        const validPrice = price && !isNaN(price) && price.trim() !== "" ? Number(price) : null;
        if (validPrice === null) {
            return res.status(400).json({ success: false, message: "Invalid price value" });
        }

        //* Then for adding images we have to get that from req.files // also check if image1 is present or not. if present image[0] would be stored
        const image1 = req.files.image1 && req.files.image1[0] // image1 is array so its image inside would be its first element
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        const images = [image1,image2,image3,image4].filter((item) => item != undefined)  //check if image is not undefined.. if it is undefined dont store it in database

        // storing these images on cloudinary
        let imagesURL = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'});
                return result.secure_url
            })
        )

        // now storing these data on mongoDB
        const productData = {
            name,
            description,
            category,
            price: Number(price),
            subCategory,
            bestseller: bestseller === "true" ? true : false,   //convert bestseller into boolean
            sizes: JSON.parse(sizes),   // we cannot send arr directly as form data so sending it through JSON.parse
            image: imagesURL,
            date: Date.now()
        }

        console.log(productData)

        // to add data we have to import product model
        const product = new productModel(productData)
        await product.save()    // storing data in database

        // printing on terminal
        // console.log(name,description,price,category,subCategory,sizes,bestseller)
        // console.log(imagesURL)

        res.json({success:true, message:"Product Added"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

// function to list products
const listProducts = async(req,res) => {

    try {
        const products = await productModel.find({});
        res.json({success:true,products})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }

}

// function to remove product
const removeProduct = async(req,res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true,msg:"product deleted"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

// function for single product info
const singleProduct = async(req,res) => {
    try {
        const { productId } = req.body  // fetching product id from req.body
        const product = await productModel.findById(productId)  // compare it with product in productModel of same id
        res.json({success:true,product})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

export { listProducts,addProduct,removeProduct,singleProduct };