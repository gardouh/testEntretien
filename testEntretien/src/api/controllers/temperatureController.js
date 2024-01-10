const temperatureService = require("../../services/temperatureService");
const data = require("../../models/data.json");

exports.getTemperatureData = (req, res) => {
  setTimeout(() => {
    const rawData = data;
    const processedData = temperatureService.processTemperatureData(rawData);
    res.json(processedData);
  }, 4000);
};
