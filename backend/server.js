import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import data from "./data.js";
<<<<<<< HEAD



=======
import passport from "passport";
import cookieParser from 'cookie-parser';
import configurePassport from './passport-config.js';
>>>>>>> freemanchanges
import ProductsRoute from "./routes/ProductsRoute.js";
import ProductDetailsRoute from "./routes/ProductDetailsRoute.js";
import userRouter from "./routes/userRouter.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({
  credentials: true, 
  origin: true
}));
app.use(cookieParser());
app.use(passport.initialize());
configurePassport(passport);



// app.use(express.urlencoded({ extended: true }));


app.get("/interApi/products", (req, res) => {
  res.send(data.products);
});

app.use("/extApi/products", ProductsRoute);
app.use("/extApi/product/details", ProductDetailsRoute);
app.use('/api/users', userRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Database connected! 😍☕"))
  .catch((error) => console.log(error, "Database did not connect! ☹️❌"));



const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`The server is listening on port ${port}... 🐒`)
);
