console.log(`--- --hello from presession-- ---`);



// dependencies
const math = require(`./libraries/maths/index`);
const quotes = require(`./libraries/quotes/index`);
const environments = require(`./helpers/environments`);



// modules scafolding
const app = {};



// modules configuration
app.config = {
    timeBetweenQuotes: environments.config.timeBetweenQuotes
};



// modules functions definition
app.printQuote = async function () {
    try {
        // console.log(`testing dependencies.`, math.random(0, 10));
        const allquotes = await quotes.getAllQuotes();
        // console.log({ allquotes });

        const randomQuote = allquotes[math.random(0, allquotes.length - 1)];
        console.log(randomQuote);

    } catch (error) {
        console.log(error);

    } finally {
        // console.log(`allquotes done...`);
    }

};



app.infinitLoop = function () {
    setInterval(app.printQuote, app.config.timeBetweenQuotes);
};



// modules invocation
app.infinitLoop();




// modules exports

