const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://broker.hivemq.com");

var interval = setInterval(function () {
  sendData();
}, 2000);

client.on("message", () => {
  console.log("message");
});

function sendData() {
  console.log("publishing");
  const randomVoltage = randomInt(0, 100);

  // Publish the random value to the topic "sensores/voltagem"
  client.publish("sensores/voltagem", randomVoltage.toString());

  console.log("published");
}

function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}
