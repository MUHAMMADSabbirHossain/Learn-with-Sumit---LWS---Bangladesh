// dependencies
const data = require(`../../library/data`);
const { hash, createRandomString, parseJSON } = require(`../../helpers/utilities`);


// module scaffolding
const handler = {};
handler.tokenHandler = function (requestProperties, callback) {
    // console.log(requestProperties.method);
    const acceptedMethods = [`get`, `post`, `put`, `delete`];

    if (acceptedMethods.indexOf(requestProperties.method) > -1) {
        handler._token[requestProperties.method](requestProperties, callback);
    } else {
        callback(405, {
            message: `Client is not allowed to use ${requestProperties.method} method.`
        });
    }

};


handler._token = {};


handler._token.get = function (requestProperties, callback) {
    // console.log(requestProperties.queryStringObject);

    const id =
        (typeof requestProperties.queryStringObject.id === `string` && requestProperties.queryStringObject.id.trim().length === 20) ? requestProperties.queryStringObject.id : false;

    if (id) {
        data.read(`tokens`, id, function (error, tokenData) {
            if (!error) {
                callback(200, tokenData);
            } else {
                callback(500, {
                    message: `Token was not found!`
                });
            }
        });
    } else {
        callback(404, {
            message: `Requested token was not found!`
        });
    }
};


handler._token.post = function (requestProperties, callback) {
    const phone =
        (typeof requestProperties.body.phone === `string` && requestProperties.body.phone.trim().length === 11) ? requestProperties.body.phone : false;

    const password =
        (typeof requestProperties.body.password === `string` && requestProperties.body.password.trim().length >= 6) ? requestProperties.body.password : false;

    if (phone && password) {
        data.read(`users`, phone, function (error, userData) {
            // console.log(error, userData);

            if (!error && userData) {
                const hashedPassword = hash(password);

                if (hashedPassword === userData.password) {
                    const tokenId = createRandomString(20);
                    const expires = Date.now() + 24 * 60 * 60 * 1000;
                    let tokenObject = {
                        id: tokenId,
                        phone,
                        expires
                    };

                    // store the token
                    data.create(`tokens`, tokenId, tokenObject, function (error) {
                        if (!error) {
                            callback(200, tokenObject);
                        } else {
                            callback(500, {
                                message: `There was a problem in server side to store token!`
                            });
                        }
                    });
                } else {
                    callback(500, {
                        message: `There was a problem in server side invalid password!`
                    });
                }
            } else {
                callback(500, {
                    message: `There was a problem in server side invalid user!`
                });
            }
        })
    } else {
        callback(400, {
            message: `Invalid phone or password`
        });
    }
};


handler._token.put = function (requestProperties, callback) {
    const id =
        (typeof requestProperties.body.id === `string` && requestProperties.body.id.trim().length === 20) ? requestProperties.body.id : false;

    const extend =
        (typeof requestProperties.body.extend === `boolean` &&
            requestProperties.body.extend === true) ? true : false;

    if (id && extend) {
        data.read(`tokens`, id, function (error, tokenData) {
            const tokenObject = {
                id,
                expires: Date.now() + 24 * 60 * 60 * 1000
            };

            if (!error && tokenData.expires > Date.now()) {
                data.update(`tokens`, id, tokenObject, function (error) {
                    if (!error) {
                        callback(200, tokenObject);
                    } else {
                        callback(500, {
                            message: `There was a problem in server side to token id or expired!`
                        })
                    }
                });
            } else {
                callback(500, {
                    message: `There was a problem in server side to token id or expired!`
                });
            }
        });
    } else {
        callback(400, {
            message: `There was a problem in client request!`
        })
    }
};


handler._token.delete = function (requestProperties, callback) {
    const id =
        (typeof requestProperties.queryStringObject.id === `string` && requestProperties.queryStringObject.id.trim().length === 20) ? requestProperties.queryStringObject.id : false;

    if (id) {
        data.delete(`tokens`, id, function (error) {
            if (!error) {
                callback(200, {
                    message: `Token was successfully deleted!`
                });
            } else {
                callback(500, {
                    message: `There was a problem in server side to token id or expired!`
                });
            }
        });
    } else {
        callback(400, {
            message: `There was a problem in client request!`
        })
    }
};


handler._token.varify = function (id, phone, callback) {
    // console.log(id, phone);

    data.read(`tokens`, id, function (error, tokenData) {
        if (!error && tokenData) {
            // console.log({ error, tokenData });

            if (tokenData.phone === phone && tokenData.expires > Date.now()) {
                callback(true);
            } else {
                callback(false);
            }
        } else {
            callback(false);
        }
    });
};



// module exports
module.exports = handler;