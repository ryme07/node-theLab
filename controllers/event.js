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

exports.modifyEvent = (req, res, next) => {
  Event.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Object edited !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteEvent = (req, res, next) => {
  Event.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "object delete !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOneEvent = (req, res, next) => {
  Event.findOne({ _id: req.params.id })
    .then((event) => res.status(200).json(event))
    .catch((error) => res.status(404).json({ error }));
};

exports.getAllEvent = (req, res, next) => {
  Event.find()
    .then((events) => res.status(200).json(events))
    .catch((error) => res.status(400).json({ error }));
};
