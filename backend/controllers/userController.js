import User from "../models/user.js"
import jwt from "jsonwebtoken" // to generate signed token
import expressJwt from "express-jwt"// authorization check
import {errorHandler} from "../helpers/dbErrorHandler.js"

export const signup= async (req, res) => {
    //console.log("req.body", req.body)
    const user = await new User(req.body)
    user.save((err, user) => {
      if (err) {
          return res.status(400).json({err:errorHandler(err)})
      }
      user.salt = undefined; // to hide the password and salt
      user.hashed_password = undefined;
      res.json({user})
    })
    
}


export const signin= (req, res) => {
  //find user based on email
  const {email, password} = req.body;

  User.findOne({email},(err, user) => {
    if(err || !user){
      return res.status(400).json({err: "User with that email does not exist. Plesese signup"})
    }
    // if user is found email and password must match
    //create authenticate method in user model
    if (!user.authenticate(password)){
      return res.status(401).json({err: "Email and password does not match"})
    }

    //generate a sign token with user id and secret

    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET)
    //persist the token as t in cookie with expiry date
    res.cookie("t",token, {expire:new Date(Date.now() + 9999)})

    // return response with user and token to frontend client
    const {_id, name, email, role} = user
    return res.json({token, user: {_id, email, name, role}})
  })

}

export const signout = (req, res) => {
    res.clearCookie("t")
    res.json({message: "Signout Successful"})
}

/* export const requiredSignin = expressJwt({ 
    secret: process.env.JWT_SECRET,
    userProperty: "auth"
}) */