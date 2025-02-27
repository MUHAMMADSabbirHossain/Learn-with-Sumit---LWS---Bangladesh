// dependencies
require('dotenv').config()



// module scafolding
const environments = {};



// staging environment definition
environments.staging = {
    timeBetweenQuotes: 2000,
};



// production environment definition
environments.production = {
    timeBetweenQuotes: 3000,
};



// // current environment
// environments.current = typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// // export corresponding environment object
// environments.config = typeof environments[environments.current] === 'object' ? environments[environments.current] : environments.staging;
// // console.log(environments);


environments.config =
    (typeof process.env.NODE_ENV === 'string' && typeof environments[process.env.NODE_ENV] === 'object') ?
        environments[process.env.NODE_ENV] :
        environments.staging;

// console.log(process.env.NODE_ENV, environments[process.env.NODE_ENV], environments.config, typeof process.env.NODE_ENV === 'string', typeof environments[process.env.NODE_ENV] === 'object');

// module exports
module.exports = environments;