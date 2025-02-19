/* 
 * Title: Routes
 * Description: Application Routes
 * Author: Muhammad Bin Ahmad
 * Date: 17/02/2025
 * 
 */


// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler')

// module scaffolding
const routes = {
    sample: sampleHandler,
};


// module exports
module.exports = routes;