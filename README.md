This is the first assignment for the IOT web of things class CIN UFPE

**webserver.js:**

- `webserver.js` has `/temperature` and `/light` endpoints.
- Both endpoints accept `'xml=true'` as a query parameter, changing the return from JSON to XML.
- The `/temperature` endpoint also accepts `'unit='` parameters, allowing the change of the temperature unit to Celsius or Fahrenheit.

**webserver_EX2.js:**

- `webserver_EX2.js` is a modified version of `webserver.js`.
- It retrieves the temperature from the `http://devices.webofthings.io/pi/sensors/temperature` endpoint.
- Note: For some reason, the data wasn't being parsed correctly when using vanilla Node.js, so `express` and `axios` are used for this purpose.
