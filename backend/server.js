const express = require("express");
const userRoute = require("./routes/users.route");
const cors = require("cors");
const mongoose = require("mongoose");

// initialize express
const app = express();

// mongodb connection
async function connectDb() {
  await mongoose.connect("mongodb://localhost/Management");

  return console.log("database connected");
}

connectDb();

// http://localhost:8000/api
// middleware
app.use(cors());
app.use(express.json());
app.use("/api/", userRoute);
const PORT = 8000;

app.listen(PORT, () => {
  console.log("server started on port " + PORT);
});
