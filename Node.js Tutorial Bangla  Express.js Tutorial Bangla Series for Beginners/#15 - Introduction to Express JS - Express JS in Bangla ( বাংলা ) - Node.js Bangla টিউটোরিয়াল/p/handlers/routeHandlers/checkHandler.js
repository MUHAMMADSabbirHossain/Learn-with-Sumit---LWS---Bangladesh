// dependencies
const tokenHandler = require(`./tokenHandler`);
const data = require(`../../library/data`);
const environment = require(`../../helpers/environment`);
const { createRandomString } = require(`../../helpers/utilities`);



// module scaffolding
const handler = {};



handler.checkHandler = function (requestProperties, callback) {
    const acceptedMethods = ['get', 'post', 'put', 'delete'];

    if (acceptedMethods.indexOf(requestProperties.method) > -1) {
        handler._check[requestProperties.method](requestProperties, callback);
    } else {
        callback(405, {
            message: `Client is not allowed to use ${requestProperties.method} method.`
        });
    }
};


handler._check = {};


handler._check.get = function (requestProperties, callback) {
    const id =
        (typeof requestProperties.queryStringObject.id === `string` && requestProperties.queryStringObject.id.trim().length === 20) ? requestProperties.queryStringObject.id : false;

    if (id) {
        // lookup the check
        data.read(`checks`, id, function (error, checkData) {
            if (!error && checkData) {
                const token =
                    (typeof requestProperties.headersObject.token === `string` && requestProperties.headersObject.token.length === 20) ? requestProperties.headersObject.token : false;


                tokenHandler._token.varify(token, checkData.userPhone, function (tokenIsValid) {
                    if (tokenIsValid) {
                        callback(200, checkData);
                    } else {
                        callback(403, {
                            message: `Authentication failure. Token is not valid!`
                        });
                    }
                });
            } else {
                callback(500, {
                    message: `There was a problem in server side to check id!`
                });
            }
        });
    } else {
        callback(404, {
            message: `Requested check id was not found!`
        });
    }
};


handler._check.post = function (requestProperties, callback) {
    // console.log(requestProperties.method);

    // validate inputs
    const protocol =
        (typeof requestProperties.body.protocol === `string` && [`http`, `https`].indexOf(requestProperties.body.protocol) > -1) ? requestProperties.body.protocol : false;

    const url =
        (typeof requestProperties.body.url === `string` && requestProperties.body.url.trim().length > 0) ? requestProperties.body.url : false;

    const method =
        (typeof requestProperties.body.method === `string` && [`GET`, `POST`, `PUT`, `DELETE`].indexOf(requestProperties.body.method) > -1) ? requestProperties.body.method : false;

    const successCodes =
        (typeof requestProperties.body.successCodes === `object` && requestProperties.body.successCodes instanceof Array && requestProperties.body.successCodes.length > 0) ? requestProperties.body.successCodes : false;

    const timeoutSeconds =
        (typeof requestProperties.body.timeoutSeconds === `number` && requestProperties.body.timeoutSeconds % 1 === 0 && requestProperties.body.timeoutSeconds >= -1 && requestProperties.body.timeoutSeconds <= 5) ? requestProperties.body.timeoutSeconds : false;

    console.log(protocol, url, method, successCodes, timeoutSeconds);


    if (protocol && url && method && successCodes && timeoutSeconds) {
        // get the token from the headers
        const token =
            (typeof requestProperties.headersObject.token === `string` && requestProperties.headersObject.token.length === 20) ? requestProperties.headersObject.token : false;

        // look up the user phone by reading the token
        data.read(`tokens`, token, (error, tokenData) => {
            if (!error && tokenData) {
                const userPhone = tokenData.phone;

                // lookup the user data
                data.read(`users`, userPhone, function (error, userData) {
                    // console.log(error, userData);

                    if (!error && userData) {
                        // verify that the given token is belongs to the user
                        tokenHandler._token.varify(token, userPhone, function (tokenIsValid) {
                            if (tokenIsValid) {
                                const userChecks =
                                    (typeof userData.checks === `object` && userData.checks instanceof Array) ? userData.checks : [];

                                if (userChecks.length < environment.config.maxChecks) {
                                    const checkId = createRandomString(20);
                                    const checkObject = {
                                        id: checkId,
                                        userPhone,
                                        protocol,
                                        url,
                                        method,
                                        successCodes,
                                        timeoutSeconds
                                    };

                                    // save the check object to database
                                    data.create(`checks`, checkId, checkObject, function (error) {
                                        if (!error) {
                                            // add check id to the user's object
                                            const userObject = { ...userData, checks: [...userChecks, checkId] };

                                            // save the user data
                                            data.update(`users`, userPhone, userObject, function (error) {
                                                if (!error) {
                                                    callback(200, checkObject);
                                                } else {
                                                    callback(500, { message: `Problem in server side to update user check data.` });
                                                }
                                            });

                                        } else {
                                            callback(500, { message: `Problem in server side to save check data.` });
                                        }
                                    });
                                } else {
                                    callback(401, { message: `User has already created ${environment.config.maxChecks} checks, limit reached.` });
                                }
                            } else {
                                callback(403, { message: `Authentication failure. Token is invalid.` });
                            }
                        });
                    } else {
                        callback(500, { message: `User not found in server side.` });
                    }
                });

            } else {
                callback(403, { message: `Authentication failure. Missing required token in request, or token is invalid.` });
            }
        });
    } else {
        callback(400, { message: `Missing required field(s).` });
    }

};


handler._check.put = function (requestProperties, callback) {
    const id =
        (typeof requestProperties.body.id === `string` && requestProperties.body.id.trim().length === 20) ? requestProperties.body.id : false;

    const protocol =
        (typeof requestProperties.body.protocol === `string` && [`http`, `https`].indexOf(requestProperties.body.protocol) > -1) ? requestProperties.body.protocol : false;

    const url =
        (typeof requestProperties.body.url === `string` && requestProperties.body.url.trim().length > 0) ? requestProperties.body.url : false;

    const method =
        (typeof requestProperties.body.method === `string` && [`GET`, `POST`, `PUT`, `DELETE`].indexOf(requestProperties.body.method) > -1) ? requestProperties.body.method : false;

    const successCodes =
        (typeof requestProperties.body.successCodes === `object` && requestProperties.body.successCodes instanceof Array && requestProperties.body.successCodes.length > 0) ? requestProperties.body.successCodes : false;

    const timeoutSeconds =
        (typeof requestProperties.body.timeoutSeconds === `number` && requestProperties.body.timeoutSeconds % 1 === 0 && requestProperties.body.timeoutSeconds >= -1 && requestProperties.body.timeoutSeconds <= 5) ? requestProperties.body.timeoutSeconds : false;

    if (id) {
        if (protocol || url || method || successCodes || timeoutSeconds) {
            console.log(id);

            data.read(`checks`, id, function (error, checkData) {
                // console.log(error, checkData);

                if (!error && checkData) {
                    const token =
                        (typeof requestProperties.headersObject.token === `string` && requestProperties.headersObject.token.length === 20) ? requestProperties.headersObject.token : false;

                    tokenHandler._token.varify(token, checkData.userPhone, function (tokenIsValid) {
                        if (tokenIsValid) {
                            protocol ? checkData.protocol = protocol : false;
                            url ? checkData.url = url : false;
                            method ? checkData.method = method : false;
                            successCodes ? checkData.successCodes = successCodes : false;
                            timeoutSeconds ? checkData.timeoutSeconds = timeoutSeconds : false;

                            // save the check object to database
                            data.update(`checks`, id, checkData, function (error) {
                                if (!error) {
                                    callback(200, checkData);
                                } else {
                                    callback(500, { message: `Problem in server side to update check data.` });
                                }
                            });
                        } else {
                            callback(403, { message: `Authentication failure. Token is invalid.` });
                        }
                    });
                } else {
                    callback(500, { message: `Authorization failure. Problem in server side to read check data.` });
                }
            });
        } else {
            callback(400, { message: `Missing required field(s).` });
        }
    } else {
        callback(400, { message: `Missing required field(s).` });
    }

};


handler._check.delete = function (requestProperties, callback) {
    const id =
        (typeof requestProperties.queryStringObject.id === `string` && requestProperties.queryStringObject.id.trim().length === 20) ? requestProperties.queryStringObject.id : false;

    if (id) {
        // lookup the check
        data.read(`checks`, id, function (error, checkData) {
            if (!error && checkData) {
                const token =
                    (typeof requestProperties.headersObject.token === `string` && requestProperties.headersObject.token.length === 20) ? requestProperties.headersObject.token : false;

                tokenHandler._token.varify(token, checkData.userPhone, function (tokenIsValid) {
                    if (tokenIsValid) {
                        // delete the check data
                        data.delete(`checks`, id, function (error) {
                            if (!error) {
                                data.read(`users`, checkData.userPhone, function (error, userData) {
                                    const userObject = userData;
                                    if (!error && userData) {
                                        const userChecks =
                                            (typeof userObject.checks === `object` && userObject.checks instanceof Array) ? userObject.checks : false;

                                        // remove the deleted check id from user's list of checks
                                        const checkPosition = userChecks.indexOf(id);

                                        if (checkPosition > -1) {
                                            userChecks.splice(checkPosition, 1);

                                            // resave the user's data
                                            userObject.checks = userChecks;

                                            data.update(`users`, userObject.phone, userObject, function () {
                                                if (!error) {
                                                    callback(200, { message: `Check deleted successfully.` });
                                                } else {
                                                    callback(500, { message: `Problem in server side to update user data.` });
                                                }
                                            });
                                        } else {
                                            callback(500, { message: `Problem in server side to delete check data.` });
                                        }
                                    } else {
                                        callback(500, { message: `Problem in server side to read user data.` });
                                    }
                                })
                            } else {
                                callback(500, { message: `Problem in server side to delete check data.` });
                            }
                        });
                    } else {
                        callback(403, { message: `Authentication failure. Token is invalid.` });
                    }
                });

            } else {
                callback(500, { message: `Problem in server side to read check data.` });
            }
        });
    } else {
        callback(400, { message: `Missing required field(s).` });
    }
};



// module exports
module.exports = handler;