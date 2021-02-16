const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//hide api Key
dotenv.config();
const apiKey = process.env.API_KEY;

const connectionOptions = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose
  .connect(apiKey, connectionOptions)
  .then(() => console.log("Connection to mongodb success"))
  .catch(() => console.log("connection failed"));

const app = express();

app.use((req, res) => {
  res.json({ message: "Request done !" });
});

module.exports = app;
