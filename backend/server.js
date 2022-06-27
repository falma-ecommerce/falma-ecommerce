import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import passport from 'passport';
import configurePassport from './passport-config.js';




dotenv.config();


const app = express();

//initialize passport 
app.use(passport.initialize());

//configure passport using our function.
configurePassport(passport);


//Database connection

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("we are connected to the database.");
  })
  .catch((error) => {
    console.log("an error occurred while connecting ot the db", error);
  });


  //middleware
  app.use(morgan("dev"));

  // app.use(expressValidator());
  

//routes
app.use("/api",userRoutes)


const port = process.env.PORT || 5000;

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});