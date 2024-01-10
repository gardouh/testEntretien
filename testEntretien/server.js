const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const temperatureRoutes = require("./src/api/routes/temperatureRoutes");

const app = express();

app.use(bodyParser.json());

app.use(cors());
app.use("/api", temperatureRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
