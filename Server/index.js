const express = require("express");
const server = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

server.use(express.json());

// server.use(bodyparser.urlencoded({extended:false}))
// server.use(bodyparser.json())

mongoose
  .connect("mongodb://localhost:27017/reddit")
  .then(() => console.log("Connected to the Database"))
  .catch((err) => console.error("Could not connect to DB", err));

server.use(function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  next();
});

const usersRoutes = require("./routes/users");
const communitiesRoutes = require("./routes/communities");
const postsRoutes = require("./routes/posts");

server.use((req, res, next) => {
  console.log("yechizi");
  // res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from

  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

server.use("/users", usersRoutes);
server.use("/communities", communitiesRoutes);
server.use("/posts", postsRoutes);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
