const express = require("express");
const router = express.Router();

const eventCtrl = require("../controllers/event");

router.get("/", eventCtrl.getAllEvent);
router.get("/:id", eventCtrl.getOneEvent);
router.post("/", eventCtrl.createEvent);
router.put("/:id", eventCtrl.modifyEvent);
router.delete("/:id", eventCtrl.deleteEvent);

module.exports = router;
