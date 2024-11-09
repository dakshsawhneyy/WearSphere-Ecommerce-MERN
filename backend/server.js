import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';

// App config
const app = express();
const port = process.env.PORT || 4000
connectDB()

// Middlewares
app.use(express.json())
app.use(cors())

// Api Endpoints
app.get('/',(req,res)=>{
    res.send("Daksh Kya Haal Hai")
})


// Start the expresss server
app.listen(port,()=> console.log('Server started on PORT : ' + port))