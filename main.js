let { Gpio } = require("onoff");

const led = new Gpio(17, "out"); // Use the GPIO pin number for your LED
let ledOn = false;

function turnOnLED() {
  console.log(`LED on`);
  led.writeSync(1); // Turn LED on
  ledOn = true;
}

function turnOffLED() {
  console.log(`LED off`);
  led.writeSync(0); // Turn LED off
  ledOn = false;
}

function toggleLED() {
  ledOn = !ledOn;
  led.writeSync(0 + ledOn);
}

function randomFlicker() {
  // Generate a random interval between 100 ms and 1000 ms
  const interval = Math.random() * 900 + 100; // Adjust range for faster or slower flickering
  setTimeout(() => {
    toggleLED();
    randomFlicker(); // Recursively start the next flicker
  }, interval);
}

// Start the random flickering
randomFlicker();

// Stop the flickering after a certain time, e.g., 30 seconds
setTimeout(() => {
  clearInterval();
  led.writeSync(0); // Ensure LED is turned off
  led.unexport(); // Release the GPIO pin
  console.log(`LED released!`);
}, 6000); // Adjust this duration to control how long the flickering lasts

// turnOnLED();
// setTimeout(() => {
//   turnOffLED();
//   led.unexport();
//   console.log(`LED released!`);
// }, 6000);

// setInterval(toggleLED, 2000);
