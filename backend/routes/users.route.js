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

// http://localhost:8000/api/user/2
// get user
router.get("/user/:id", async (req, res) => {
  try {
    // get user id from params
    const id = req.params.id;
    const user = await User.findById({ _id: id });
    // return json
    return res.json(user);
  } catch (error) {
    return res.status(500).json("server error");
  }
});

// http://localhost:8000/api/update/user/1
// update user
router.put("/update/user/:id", (req, res) => {
  try {
    const id = req.params.id;

    User.findByIdAndUpdate(
      { _id: id },
      { $set: req.body },
      { new: true },
      (err, data) => {
        if (err || !data) {
          return res.status(400).json("user failed to update");
        } else {
          return res.status(200).json(data);
        }
      }
    );
  } catch (error) {
    return res.status(500).json({
      msg: "server error",
      error,
    });
  }
});

// http://localhost:8000/api/delete/user/2
// delete user
router.delete("/delete/user/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const userDeleted = await User.findByIdAndDelete({ _id: id });

    return res.status(200).json(userDeleted);
  } catch (error) {
    return res.status(500).json("server error");
  }
});

// http://localhost:8000/api/user
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
