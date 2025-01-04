// WE WILL AUTHENTICATE USER WHEN USER ADD DATA TO CART OR REMOVE DATA OR WHEN PLACE ORDER THEN IS AUTH IS USED
import jwt from 'jsonwebtoken'

const authUser = async(req,res,next) => {
    
    const {token} = req.headers;
    if(!token){
        return res.json({success:false, message:'Not authorised, Login Again'})
    }

    try {
        // decode that token
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        req.body.userId = token_decode.id   // we need user id so that their cart items be stored as per their id
        next()
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

export default authUser