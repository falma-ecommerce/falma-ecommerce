import express from "express";
import passport from "passport";
//import controllers from "../controllers/user.js"
import {signup, signin, signout} from "../controllers/userController.js"

/* import  {userSignupValidators} from "../validator/validator.js"; */

const router = express.Router();


 //routes
 router.post("/signup", signup); 
 router.post("/signin", signin); 
 router.get("/signout", signout); 

 router.use(passport.authenticate("jwt", { session: false })); 

export default router