This is the first assignment for the IOT web of things class CIN UFPE

**webserver.js:**

- `webserver.js` has `/temperature` and `/light` endpoints.
- Both endpoints accept `'xml=true'` as a query parameter, changing the return from JSON to XML.
- The `/temperature` endpoint also accepts `'unit='` parameters, allowing the change of the temperature unit to Celsius or Fahrenheit.

**webserver_EX2.js:**

- `webserver_EX2.js` is a modified version of `webserver.js`.
- It retrieves the temperature from the `http://devices.webofthings.io/pi/sensors/temperature` endpoint.
- Note: For some reason, the data wasn't being parsed correctly when using vanilla Node.js, so `express` and `axios` are used for this purpose.

This is the Second assignment for the IOT web of things class CIN UFPE

**webserver_sse.js:**

- `webserver_EX2.js` is a modified version of `webserver.js` to use sse to serve a new value every 2 seconds.
- `client.js` serves `sse_client.html` which uses eventSource to get the data from the webserver

This is the Third assignment for the IOT web of things class CIN UFPE

**MQTT:**

- `Publisher.js` is the publisher in the publisher/subscriber mqtt and publishs a random number every second
- `Subscriber.js` is the subscriber in the publisher/subscriber mqtt and reads the messages from publisher
