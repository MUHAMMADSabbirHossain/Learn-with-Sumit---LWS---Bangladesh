/* 
 * Title: Routes
 * Description: Application Routes
 * Author: Muhammad Bin Ahmad
 * Date: 17/02/2025
 * 
 */


// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');
const { userHandler } = require('./handlers/routeHandlers/userHandler');

// module scaffolding
const routes = {
    sample: sampleHandler,
    user: userHandler,
};


// module exports
module.exports = routes;