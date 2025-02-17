/*
 * Title: Basic Node app example
 * Description: Simple node application that print random quotes per second interval.
 * Author: muhammad bin ahmad
 * Date: 11/09/19
 *
 */


// dependencies
const mathLibrary = require('./lib/math');
const quotesLibrary = require('./lib/qoutes');

// app object - module scaffolding
const app = {};



// configuration
app.config = {
    timeBetweenQuotes: 2000,
};

// get all quotes
const allQuotes = quotesLibrary.allQuotes();

// Get the length of the quotes
const numberOfQuotes = allQuotes.length;

// Function that prints a random quote
app.printAQuote = function () {
    // Pick a random number between 1 and the number of quotes
    const randomNumber = mathLibrary.getRandomNumber(1, numberOfQuotes);

    // Get the quote at that position in the array (minus one)
    const selectedQuoted = allQuotes[randomNumber - 1];

    // Print the quote to the console
    console.log(selectedQuoted);
};



// Function that loops indefinitely, calling the printAQuote function as it goes
app.indifiniteLoop = function () {
    setInterval(app.printAQuote, app.config.timeBetweenQuotes)
};


// Invoke the loop
app.indifiniteLoop();