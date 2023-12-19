const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://broker.hivemq.com");

// Subscribe to the topic "sensores/voltagem" when connected
client.on("connect", () => {
  console.log("connected");
  client.subscribe("sensores/voltagem", (err) => {
    if (!err) {
      console.log("subscribed to sensores/voltagem");
    } else {
      console.error("subscription error", err);
    }
  });
});

client.on("message", (topic, message) => {
  console.log("received message %s %s", topic, message.toString());
});
