/*
 * Title: Environments
 * Description: Handle all environment related things
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 11/20/2020
 *
 */

// dependencies
require('dotenv').config();

// module scaffolding
const environments = {};

// twilio: {
//     fromPhone: `${process.env.TWILIO_fromPhone}`,
//     accountSid: `${process.env.TWILIO_fromPhone}`,
//     authToken: `${process.env.TWILIO_authToken}`,
// }
// console.log(process.env.TWILIO_fromPhone);
// console.log(`${process.env.TWILIO_fromPhone}`);


// staging environment
environments.staging = {
    port: 3000,
    envName: 'staging',
    secretKey: 'hsjdhsdhsjdhjshdjshd',
    maxChecks: 5,
};

// production environment
environments.production = {
    port: 5000,
    envName: 'production',
    secretKey: 'djkdjskdjksdjksjdskjd',
    maxChecks: 5,
};

// determine which environment was passed
const currentEnvironment =
    typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding environment object
const environmentToExport =
    typeof environments[currentEnvironment] === 'object'
        ? environments[currentEnvironment]
        : environments.staging;

// export module
module.exports = environmentToExport;