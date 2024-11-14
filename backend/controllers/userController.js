import validator from "validator";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

{/* To create token we need to create an arrow function */}
const createToken = (id) => {
    // Here we will return token which will be created by jwt
    return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Route for login user
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Find email is available in userModel
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User doesn't exists" });
        }
        // If id matched then compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = createToken(user._id);
            res.json({ success: true, token });
        } else {
            res.json({ success: false, msg: "Invalid Credentials" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, msg: error.message });
    }
};

// Route for signup user
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Checking user alreasy exists or not
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, msg: "User Already Exists" });
        }

        // Validating email format and strong password using validator
        if (!validator.isEmail(email)) {
            return res.json({
                success: false,
                msg: "Please enter a valid email",
            });
        }
        if (password.length < 6) {
            return res.json({
                success: false,
                msg: "Please enter a password of atleast 6 characters",
            });
        }

        // Now when email is also valid and it is unique so then we have to store email and password and store password in hash form and encrypted
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashPassword,
        });

        const user = newUser.save();

        // Whenever there will be a new user created. A unique token as its id is made
        const token = createToken(user._id);

        res.json({ success: true, token });
    } catch (error) {
        console.log(error);
        res.json({ success: false, msg: error.message });
    }
};

// Route for admin login
const adminLogin = async (req, res) => {
    try {
        const {email,password} = req.body
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            // if both email and password matches then create a token
            const token = jwt.sign(email + password,process.env.JWT_SECRET);
            res.json({success:true,token})
        }else {
            res.json({success:false,message:"Invalid Credentials"})
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, msg: error.message });
    }
};
// using this adminLogin we can authenticate admin with help of middleware


export { loginUser, registerUser, adminLogin };
