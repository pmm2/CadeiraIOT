const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

app.use(function (req, res, next) {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/temperature", function (req, res) {
  res.status(200);

  const format = req.query.xml === "true" ? "xml" : "json";
  const units = req.query.units || "celsius";

  const interval = setInterval(function () {
    const data = {
      value: randomInt(100, 127),
      units: units,
    };

    let responseData;
    if (format === "xml") {
      responseData = `<data><value>${data.value}</value><units>${data.units}</units></data>`;
    } else {
      responseData = `data: ${JSON.stringify(data)}\n\n`;
    }

    res.write(responseData);
  }, 2000);

  // Close the connection after 10 seconds for demonstration purposes
  setTimeout(() => {
    clearInterval(interval);
    res.end();
  }, 10000);
});
app.get("/light", function (req, res) {
  res.status(200);

  const format = req.query.xml === "true" ? "xml" : "json";
  const units = req.query.units || "celsius";

  const interval = setInterval(function () {
    const data = {
      value: randomInt(100, 127),
      units: units,
    };

    let responseData;
    if (format === "xml") {
      responseData = `<data><value>${data.value}</value><units>${data.units}</units></data>`;
    } else {
      responseData = `data: ${JSON.stringify(data)}\n\n`;
    }

    res.write(responseData);
  }, 2000);

  // Close the connection after 10 seconds for demonstration purposes
  setTimeout(() => {
    clearInterval(interval);
    res.end();
  }, 10000);
});
server.listen(9090, function () {
  console.log("SSE-Server started on port 9090!");
});

function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}
