// dependencies
const { sampleHandler } = require(`./handlers/routeHandlers/sampleHandler`);
const { aboutHandler } = require(`./handlers/routeHandlers/aboutHandler`);
const { contactHandler } = require(`./handlers/routeHandlers/contactHandler`);
const { userHandler } = require(`./handlers/routeHandlers/userHandler`);
const { tokenHandler } = require(`./handlers/routeHandlers/tokenHandler`);
const { checkHandler } = require(`./handlers/routeHandlers/checkHandler`);



// module scaffolding
const routes = {
    sample: sampleHandler,
    user: userHandler,
    token: tokenHandler,
    check: checkHandler,
    about: aboutHandler,
    contact: contactHandler,
};



// module exports
module.exports = routes;