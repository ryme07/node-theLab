const express = require("express");
const app = express();

app.use((req, res) => {
  res.json({ message: "Request done !" });
});

module.exports = app;
