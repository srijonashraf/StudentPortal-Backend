const express = require("express");
const rateLimit = require("express-rate-limit");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();

// Middleware Implementation

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Use RateLimiters
const setRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

app.use(setRateLimit);

//Mongo DB Connection
let URL = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.nakaabb.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`;
let CONFIG = {
  user: process.env.USER,
  pass: process.env.PASS,
  autoIndex: true,
};

try {
  mongoose.connect(URL, CONFIG);
  console.log("DB Connected!");
} catch (err) {
  console.error(err);
}


//Router
const apiRouter = require("./src/routes/api");
app.use("/api", apiRouter);

app.use((req, res) => {
  res.status(404).json({ status: "error", message: "Page Not Found" });
});

module.exports = app;
