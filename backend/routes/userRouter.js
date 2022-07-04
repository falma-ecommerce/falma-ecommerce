import express from "express";
import passport from 'passport';

import { getAllUsers, getProfile, signin, signout, signup, shipping } from "../controllers/userController.js";
// import userSignupValidator from "../helpers/userSignInValidator.js"


const userRouter = express.Router();

userRouter.get('/userlist', getAllUsers)

userRouter.post("/signin", signin)  

userRouter.post("/signup", signup) //userSignupValidator 

userRouter.post("/shipping", shipping)

userRouter.get('/signout', signout )

userRouter.use(passport.authenticate('jwt',{session:false}));
userRouter.get('/profile', getProfile )


export default userRouter;
