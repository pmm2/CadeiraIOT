const express = require("express");
const axios = require("axios");
const app = express();
const port = 8686;

function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

app.get("/temperature", async (req, res) => {
  try {
    const isXml = req.query.xml === "true";
    const response = await axios.get(
      "http://devices.webofthings.io/pi/sensors/temperature"
    );
    const data = response.data;
    if (isXml) {
      res.header("Content-Type", "application/xml");
      res.send(
        `<temperature>${data.value}<unit>${data.unit}</unit></temperature>`
      );
    } else {
      res.json({ temperature: data.value, unit: data.unit });
    }
  } catch (error) {
    console.error("Error handling temperature request:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/light", async (req, res) => {
  try {
    const isXml = req.query.xml === "true";

    const light = randomInt(1, 40);

    if (isXml) {
      res.header("Content-Type", "application/xml");
      res.send(`<light>${light}</light>`);
    } else {
      res.json({ light });
    }
  } catch (error) {
    console.error("Error handling light request:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("*", (req, res) => {
  res.json({ hello: "world" });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
