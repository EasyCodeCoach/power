const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 8,
    max: 99,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },
});

module.exports = mongoose.model("User", userSchema);
