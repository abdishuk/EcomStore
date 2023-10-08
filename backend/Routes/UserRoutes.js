import express from "express";
import AsyncHandler from "express-async-handler";
import User from "../Models/UserModel.js";

const router = express.Router();

// user login route

router.post(
  "/login",
  AsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log(user);

    if (user && (await user.matchPassword(password))) {
      res.status(201).json({
        _id: user._id,
        firstname: user.name,
        email: user.email,
        lastname: user.lastname,
      });
    } else {
      res.status(401).json({
        error: "invalid password or user",
      });
    }
  })
);

// register user post api/users
//@ access public
router.post(
  "/",
  AsyncHandler(async (req, res) => {
    const { email, firstname, lastname, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "user already exists" });
    }
    const createUser = new User({
      email,
      firstname,
      lastname,
      password,
    });
    await createUser.save();
    if (createUser) {
      res.status(201).json({
        _id: createUser._id,
        firstname: createUser.firsrname,
        email: createUser.email,
        lastname: createUser.lastname,
      });
    }
  })
);

export default router;
