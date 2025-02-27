// dependencies
const fs = require('fs');



// modules scafolding
const quotes = {};



quotes.getAllQuotes = async function () {
    // console.log(`get all quotes...`);

    // const readStream = fs.createReadStream(`${__dirname}/quotes.txt`, `utf-8`);
    // let streamContents = ``;

    // readStream.on(`data`, (chunk) => {
    //     streamContents += chunk;
    // });

    // readStream.on(`end`, async () => {
    //     console.log('teiajfa;it ', streamContents.split(`\r\n`));
    //     return streamContents.split(`\r\n`);
    // });


    // const contents = await fs.promises.readFile(`${__dirname}/quotes.txt`, `utf-8`);
    // return contents.split(`\r\n`);


    // const contents = await fs.promises.readFile(`${__dirname}/quotes.txt`, `utf-8`).then((data) => {
    //     return data.split(`\r\n`);
    // });

    return new Promise((resolve, reject) => {
        const readStream = fs.createReadStream(`${__dirname}/quotes.txt`, `utf-8`);
        let streamContents = ``;

        readStream.on(`data`, (chunk) => {
            streamContents += chunk;
        });

        readStream.on(`end`, async () => {
            resolve(streamContents.split(`\r\n`));
        });

        readStream.on(`error`, (err) => {
            reject(err);
        });
    });
};



// modules exports
module.exports = quotes;