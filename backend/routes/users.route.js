const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

// http://localhost:8000/api/users
// get users
// async await
router.get("/users", async (req, res) => {
  const users = await User.find();

  return res.json(users);
});

// http://localhost:8000/api/user/1
// get user
router.get("/api/user/:id", (req, res) => {});

// http://localhost:8000/api/update/user/1
// update user
router.put("/update/user/:id", (req, res) => {});

// http://localhost:8000/api/delete/user/2
// delete user
router.delete("/delete/user/:id", (req, res) => {});

// http://localhost:8000/api/update/users
// create user
router.post("/user", async (req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const gender = req.body.gender;
  const age = req.body.age;

  const newUser = new User({
    name,
    age,
    phone,
    gender,
  });

  const user = await newUser.save();

  return res.json(user);
});

module.exports = router;
