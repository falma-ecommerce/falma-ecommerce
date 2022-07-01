import bcrypt from "bcrypt";
import User from "./../models/userModel.js";
import expressAsyncHandler from "express-async-handler";
import jwtissuer from "../helpers/jwtissuer.js";

/**
 * Get Users list
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const getAllUsers = expressAsyncHandler(async (req, res) => {
  const users = await User.find({}).select("username firstname lastname email");
  return res.status(200).json(users);
});

/**
 * Registration method
 * @param {*} req
 * @param {*} res
 */
export const signup = expressAsyncHandler(async (req, res) => {
  const {
    username,
    firstname,
    lastname,
    email,
    password,
    confirmPassword,
    isAdmin,
  } = req.body;

  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    firstname,
    lastname,
    email,
    password: hash,
    confirmPassword: hash,
    isAdmin,
  });
  return res
    .status(200)
    .json({ message: "User was created", createdUser: user });
});

export const signin = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!password) {
    return res.status(400).json({ message: "No password supplied" });
  }
  const user = await User.findOne({ email: email });
  const checkPassword = await bcrypt.compare(password, user.password);

  if (checkPassword) {
    console.log("Congratulation! authenticated🐵 ");
    const token = await jwtissuer.issueToken(user);

    return res
      .status(200)
      .cookie("jwt", token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
      })
      .json({
        message: "Login succesful",
        user: user.username,
      });
  }
  return res.status(400).json({ message: "Invalid email or password" });
});

export const signout = async (req, res) => {
  //remove the httponly cookie
  res
    .clearCookie("jwt", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    })
    .json({ message: "You are logged out." });
};

export const getProfile = async (req, res) => {
  return res.status(200).json({ profile: req.user });
};
