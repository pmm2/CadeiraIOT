const express = require("express");
const path = require("path");
const axios = require("axios");

const app = express();
const port = 3000;

// Set up a static route to serve the HTML file
app.use(express.static(path.join(__dirname, "public")));

// Route to fetch data from the external URL
app.get("/getDataFromExternalURL", async (req, res) => {
  try {
    const response = await axios.get(
      "http://devices.webofthings.io/pi/sensors/temperature"
    );
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
