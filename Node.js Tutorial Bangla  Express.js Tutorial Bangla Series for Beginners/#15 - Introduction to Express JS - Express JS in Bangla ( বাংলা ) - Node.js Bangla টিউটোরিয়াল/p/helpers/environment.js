// dependencies



// module scaffolding
const environments = {};





// determine which environment was passed
const currentEnvironment =
    typeof (process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV : 'staging';


// export corresponding environment object
environments.config =
    typeof environments[currentEnvironment] === 'object' ? environments[currentEnvironment] : environments.staging;



// module exports
module.exports = environments;