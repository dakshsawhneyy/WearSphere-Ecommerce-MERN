import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected',() => {
        console.log("connected to mongoose successfully");
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce_mern`)

}

export default connectDB;
