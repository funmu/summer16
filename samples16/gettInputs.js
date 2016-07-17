// ----------------------------------------------------------
//	 getInputs.js
//
//	 - Show case how to get inputs using JavaScript
//
//	 Created: Murali, 07/16/2016
//
//	 Credits: https://github.com/shovon/sync-prompt
// ----------------------------------------------------------

const prompt = require('sync-prompt').prompt;

// Let us ask a question and write the answer
var feedback = prompt('What do you think of Node.js? ');
console.log('Thank you for your valuable feedback:', answer);

// Let us ask a question for integer input and write the answer
var ratingInfo = prompt( 'Rate your expeirence with NodeJS (1 is worst and 5 is best)? ');
// convert answer from string to the integer
var rating = parseInt(answer);
// make sure that the number is within a range of 1..5
if ( rating <= 0) { rating = 1; }
if ( rating > 5) { rating = 5;}

var showStars = Array( rating).fill('*').join(' ');

console.log('Thanks for rating NodeJS with %d stars: %s',
	rating, showStars);

