const express = require("express");
const http = require("http");
const fs = require("fs");

const app = express();
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/sse_client.html");
});

server.listen(3000, () => {
  console.log("Server is listening on port 9090");
});
