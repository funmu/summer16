// ----------------------------------------------------------
//	 Problem2.js
//
//	 - Experiment with Random numbers and create addition problems
//
//	 Created: Miles, Do not know when
//
// ----------------------------------------------------------

var number = 8;

var Prompt = require('prompt');
Prompt.start();

Prompt.get( ["Number"], generateProblems);

function generateProblems( err, result) {

	console.log( " Generating %d problems", result.Number);

	for(var ii=0;ii< result.Number;ii++)
	{
		var inta	= Math.round( Math.random()*10);
		var otherInt= Math.round( Math.random()*10);

		console.log( " %d. %d + %d = %d", 
			ii+1, inta, otherInt, (inta + otherInt));
	}
}