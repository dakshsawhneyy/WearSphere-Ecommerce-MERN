import jwt from 'jsonwebtoken'

// next will be our callback function // A callback function in JavaScript is a function that is passed as an argument to another function and is executed later, usually after some kind of operation is completed
const adminAuth = async(req,res,next) => {
    try {
        const { token } = req.headers   // add token to header in thunderclient
        if(!token){
            return res.json({success:false, message:"Not Authorized Login Again"})   // * here we are returning return because if token not found it will stop executing fxn
        }
        // if token is available then we will decode the token
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);   // jwt.verify ensures token is still valid 
        //* check if decoded email is equal to (email + password)
        if(token_decode != process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json({success:false, message:"Not Authorized Login Again"})
        }
        // if it matches then we call our callback function
        next();
    } catch (error) {
        console.log(error)
        res.json({success:false, message: error.message})
    }
}

export default adminAuth;

//! add this middleware in the product route