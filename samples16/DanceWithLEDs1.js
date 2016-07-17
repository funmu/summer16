// ----------------------------------------------------------
//	 DanceWithLEDs.js
//
//	 - Experiment with LED connected to Tessel2 Board
//
//	 Created: Murali, 07/16/2016
//
//	 Credits: https://learn.sparkfun.com/tutorials/experiment-guide-for-the-johnny-five-inventors-kit/experiment-1-blink-an-led
// ----------------------------------------------------------

var Tessel = require("tessel-io");
var five = require("johnny-five");

var board = new five.Board({
  io: new Tessel()
});

ledPin = "a5";
ledDelayTimerMS = 500;

LedBlinkConfiguration = [
	{ 
		pin: "a0", 
		delay: 100
	},
	{ 
		pin: "a1", 
		delay: 200
	},
	{ 
		pin: "a5", 
		delay: 500
	},
	{ 
		pin: "a6", 
		delay: 1000
	},
	{ 
		pin: "a7", 
		delay: 2000
	}
];

function configureBlinking( ledPin, ledDelayTimerMS) 
{
	// console.log( " Lighting up LED: %s at delay %d", )
  var led = new five.Led( ledPin);
  led.blink( ledDelayTimerMS);
}

board.on("ready", () => {

	var x = 2;
	for (x in LedBlinkConfiguration) {
		configureBlinking( LedBlinkConfiguration[x]);
	}
});