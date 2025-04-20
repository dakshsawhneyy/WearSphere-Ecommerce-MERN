import express from 'express'
import { loginUser,registerUser,adminLogin } from '../controllers/userController.js'

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  res.send('User data');  // Or fetch actual user data
});

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.post('/admin',adminLogin)

export default userRouter;
// Using this router we will create the endpoints in server.js
