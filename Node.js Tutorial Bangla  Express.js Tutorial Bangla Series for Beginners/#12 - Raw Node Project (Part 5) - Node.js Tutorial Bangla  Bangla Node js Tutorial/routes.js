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
const { tokenHandler } = require('./handlers/routeHandlers/tokenHandler');

// module scaffolding
const routes = {
    sample: sampleHandler,
    user: userHandler,
    token: tokenHandler,
};


// module exports
module.exports = routes;