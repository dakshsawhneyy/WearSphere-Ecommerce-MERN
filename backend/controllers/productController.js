

// function to add product
// To add a product we will create a middleware using multer
const addProduct = (req,res) => {
    try {
        console.log(req.files);  // Log to inspect

        const { name,description,price,category,subCategory,sizes,bestseller } = req.body;
        //* Then for adding images we have to get that from req.files // also check if image1 is present or not. if present image[0] would be stored
        const image1 = req.files.image1 && req.files.image1[0] // image1 is array so its image inside would be its first element
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        const images = [image1,image2,image3,image4].filter((item) => item != undefined)  //check if image is not undefined.. if it is undefined dont store it in database

        // storing these images on cloudinary

        console.log(name,description,price,category,subCategory,sizes,bestseller)
        console.log(images)

        res.json({})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

// function to list products
const listProducts = (req,res) => {

}

// function to remove product
const removeProduct = (req,res) => {

}

// function for single product info
const singleProduct = () => {

}

export { listProducts,addProduct,removeProduct,singleProduct };