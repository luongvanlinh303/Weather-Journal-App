const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("website"));

const port = 8080;
projectData = {};

function listening() {
  console.log(`The server running on localhost:${port}`);
}

function sendData(req, res) {
  res.send(projectData);
}

function addWeatherData(req, res) {
  projectData = req.body;
  res.send(projectData);
}

app.get("/all", sendData);
app.post("/addWeatherData", addWeatherData);

app.listen(port, listening);
