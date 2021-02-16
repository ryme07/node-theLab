const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Event = require("./models/Event");
const eventRoutes = require("./routes/event");

//hide api Key
dotenv.config();
const apiKey = process.env.API_KEY;

const app = express();

const connectionOptions = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose
  .connect(apiKey, connectionOptions)
  .then(() => console.log("Connection to mongodb success"))
  .catch(() => console.log("connection failed"));

//cors policy
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// body Parser
app.use(bodyParser.json());

app.use("/api/event", eventRoutes);

module.exports = app;
