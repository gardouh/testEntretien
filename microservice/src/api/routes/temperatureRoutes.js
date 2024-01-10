const express = require("express");
const temperatureController = require("../controllers/temperatureController");

const router = express.Router();

router.get("/temperature", temperatureController.getTemperatureData);

module.exports = router;
