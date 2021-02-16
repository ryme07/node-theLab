const Event = require("../models/Event");

exports.createEvent = (req, res, next) => {
  delete req.body._id;
  const event = new Event({
    ...req.body,
  });
  event
    .save()
    .then(() => res.status(201).json({ message: "object save !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getAllEvent = (req, res, next) => {
  Event.find()
    .then((events) => res.status(200).json(events))
    .catch((error) => res.status(400).json({ error }));
};
