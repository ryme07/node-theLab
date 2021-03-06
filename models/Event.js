const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  date: { type: String, required: true },
  userId: { type: String, required: false },
});

module.exports = mongoose.model("Event", eventSchema);
