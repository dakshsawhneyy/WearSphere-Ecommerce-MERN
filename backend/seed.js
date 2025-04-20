import mongoose from "mongoose";
import dotenv from "dotenv";
import productModel from "./models/productModel.js";

dotenv.config();

const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("MongoDB connected!");
};

const seedProducts = async () => {
  try {
    await connectDB();

    const products = [
      {
        name: "Cool Hoodie",
        description: "Comfortable and stylish",
        price: 1299,
        image: ["https://dummyimage.com/300"],
        category: "clothing",
        subCategory: "hoodie",
        sizes: ["S", "M", "L"],
        bestseller: true,
        date: Date.now()
      },
      {
        name: "Graphic T-Shirt",
        description: "Trendy streetwear tee",
        price: 699,
        image: ["https://dummyimage.com/301"],
        category: "clothing",
        subCategory: "tshirt",
        sizes: ["M", "L"],
        bestseller: false,
        date: Date.now()
      }
    ];

    await productModel.deleteMany(); // Optional: Clears existing
    await productModel.insertMany(products);
    console.log("Sample products seeded! 🎉");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedProducts();

