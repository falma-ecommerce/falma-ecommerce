import express from "express";
import passport from 'passport';

import { getAllUsers, getProfile, signin, signout, signup } from "../controllers/userController.js";


const userRouter = express.Router();

userRouter.get('/userlist', getAllUsers)

userRouter.post("/signin", signin)  

userRouter.post("/signup", signup)  

userRouter.get('/signout', signout )

userRouter.use(passport.authenticate('jwt',{session:false}));
userRouter.get('/profile', getProfile )


export default userRouter;
