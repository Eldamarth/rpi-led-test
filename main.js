let { Gpio } = require("onoff");

const led = new Gpio(17, "out"); // Use the GPIO pin number for your LED
let ledOn = false;

function turnOnLED() {
  led.writeSync(1); // Turn LED on
  ledOn = true;
}

function turnOffLED() {
  led.writeSync(0); // Turn LED off
  ledOn = false;
}

function toggleLED() {
  ledOn = !ledOn;
  led.writeSync(ledOn);
}
turnOnLED();
setTimeout(() => {
  turnOffLED();
  led.unexport();
}, 6000);

// setInterval(toggleLED, 2000);
