// ----------------------------------------------------------
//	 readinput.js
//
//	 - Example to show how to get inputs in JavaScript
//
//	 Created: Murali, 07/16/2016
//
//	 Credits: https://www.npmjs.com/package/prompt
// ----------------------------------------------------------

const readline = require('readline');

// setup to read from standard input 
//	and write to standard output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getRatingForNode() 
{
	// Let us ask a question for integer input and write the answer
	rl.question('\nRate your expeirence with NodeJS (1 is worst and 5 is best)? ', 
		(answer) => {

			// convert answer from string to the integer
			var rating = parseInt(answer);

			// make sure that the number is within a range of 1..5
			if ( rating <= 0) { 
				console.log( "\tWarning: Rating was lower than 1. Setting to 1.")
				rating = 1; 
			}
			
			if ( rating > 5) { 
				console.log( "\tWarning: Rating was higher than 5. Setting to 5.")
				rating = 5;
			}

			// generate a sequence of stars as per rating
			var showStars = Array( rating).fill('*').join(' ');

		  	console.log('Thanks for rating NodeJS with %d stars: %s\n',
		  		rating, showStars);

		  	// Close the readline after all is done
		  	rl.close();
		});
}

// Let us ask a question and write the answer
rl.question('What do you think of Node.js? ', 
	(answer) => {
  
  console.log('\nThank you for your valuable feedback:', answer);
  
  getRatingForNode();
});
