// dependencies
const crypto = require('crypto');
const environments = require(`./environment`);



// module scaffolding
const utilities = {};



// parse JSON string to object
utilities.parseJSON = (jsonString) => {
    let output;

    try {
        output = JSON.parse(jsonString);
    } catch {
        output = {};
    }

    return output;
};



// hash string
utilities.hash = function (str) {
    if (typeof (str) === `string` && str.length > 0) {
        const hash = crypto
            .createHmac(`sha256`, environments.config.secretKey)
            .update(str)
            .digest(`hex`);

        return hash;
    } else {
        return false;
    }
};


// create random string
utilities.createRandomString = function (strLength) {
    // console.log(strLength);

    const length =
        (typeof strLength === `number` && strLength > 0) ? strLength : false;

    if (length) {
        const possibleCharacters = `abcdefghijklmnopqrstuvwxyz0123456789`;
        const possibleCharactersLength = possibleCharacters.length;
        let output = ``;

        for (let i = 1; i <= length; i++) {
            const randomCharacter = possibleCharacters.charAt(Math.floor(Math.random() * possibleCharactersLength));
            output += randomCharacter;
        }
        return output;
    } else {
        return false;
    }
}



// module exports
module.exports = utilities;