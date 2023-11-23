var http = require("http");
var url = require("url");
var port = 8686;

function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

http
  .createServer(function (req, res) {
    console.log("New incoming client request for " + req.url);

    var urlParts = url.parse(req.url, true);
    var path = urlParts.pathname;
    var params = urlParts.query;
    var isXml = params.xml === "true";
    var units = params.units || "C";
    switch (path) {
      case "/temperature":
        if (isXml) {
          res.writeHeader(200, { "Content-Type": "application/xml" });
          res.write(
            `<temperature>${randomInt(
              1,
              40
            )}<unit>${units}</unit></temperature>`
          );
          break;
        }
        res.writeHeader(200, { "Content-Type": "application/json" });
        res.write(`{"temperature" :${randomInt(1, 40)} , "unit" :"${units}"}`);

        break;
      case "/light":
        if (isXml) {
          res.writeHeader(200, { "Content-Type": "application/xml" });
          res.write(`<light>${randomInt(1, 40)}</light>`);
          break;
        }
        res.writeHeader(200, { "Content-Type": "application/json" });
        res.write('{"light" :' + randomInt(1, 40) + "}");

        break;

      default:
        res.write('{"hello" : "world"}');
    }
    res.end();
  })
  .listen(port);
console.log("Server listening on http://localhost:" + port);
