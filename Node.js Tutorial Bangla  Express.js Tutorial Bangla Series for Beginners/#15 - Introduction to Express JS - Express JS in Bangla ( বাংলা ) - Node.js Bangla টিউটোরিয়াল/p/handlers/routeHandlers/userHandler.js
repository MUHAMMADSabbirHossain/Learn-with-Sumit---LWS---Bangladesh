// dependencies
const data = require(`../../library/data`);
const { hash } = require(`../../helpers/utilities`);
const tokenHandler = require(`./tokenHandler`);



// module scaffolding
const handler = {};



// user handler
handler.userHandler = function (requestProperties, callback) {
    const acceptedMethods = ['get', 'post', 'put', 'delete'];

    if (acceptedMethods.indexOf(requestProperties.method) > -1) {
        handler._users[requestProperties.method](requestProperties, callback);
    } else {
        callback(405, {
            message: `Client is not allowed to use ${requestProperties.method} method.`
        });
    }
};


handler._users = {};


handler._users.get = function (requestProperties, callback) {
    // console.log(requestProperties.queryStringObject);

    // check the phone number if valid
    const phone =
        (typeof requestProperties.queryStringObject.phone === `string` && requestProperties.queryStringObject.phone.trim().length === 11) ? requestProperties.queryStringObject.phone : false;

    if (phone) {
        // varify token 
        const token =
            (typeof requestProperties.headersObject.token === `string` && requestProperties.headersObject.token) ? requestProperties.headersObject.token : false;
        // console.log(token, requestProperties.headersObject.token, phone);

        tokenHandler._token.varify(token, phone, function (tokenId) {
            // console.log({ tokenId });

            if (tokenId) {
                // lookup the user
                data.read('users', phone, (error, user) => {
                    if (!error && user) {
                        // console.log(error, user);
                        delete user.password;
                        callback(200, user);
                    } else {
                        callback(404, {
                            'error': 'Requested user was not found!',
                        });
                    }
                });
            } else {
                callback(403, {
                    error: `Authentication failure!`
                });
            }
        });
    } else {
        callback(404, {
            message: `Requested user was not found.`
        });
    }
};


handler._users.post = function (requestProperties, callback) {
    const firstName =
        (typeof requestProperties.body.firstName === `string` && requestProperties.body.firstName.trim().length > 0) ? requestProperties.body.firstName : false;

    const lastName =
        (typeof requestProperties.body.lastName === `string` && requestProperties.body.lastName.trim().length > 0) ? requestProperties.body.lastName : false;

    const phone =
        (typeof requestProperties.body.phone === `string` && requestProperties.body.phone.trim().length === 11) ? requestProperties.body.phone : false;

    const password =
        (typeof requestProperties.body.password === `string` && requestProperties.body.password.trim().length >= 6) ? requestProperties.body.password : false;

    const tosAgreement =
        (typeof requestProperties.body.tosAgreement === `boolean` && requestProperties.body.tosAgreement === true) ? true : false;


    if (firstName && lastName && phone && password && tosAgreement) {
        // make sure that the user doesn't already exist
        data.read(`users`, phone, function (error, res) {
            if (error) {
                let userObject = {
                    firstName,
                    lastName,
                    phone,
                    password: hash(password),
                    tosAgreement,
                }
                // console.log(userObject);

                // store the user to database
                data.create(`users`, phone, userObject, function (error, data) {
                    // console.log(error, data);
                    if (!error) {
                        callback(200, {
                            message: `User created successfully.`
                        });
                    } else {
                        callback(500, {
                            message: `There was a problem in server.`
                        });
                    }
                });
            } else {
                callback(500, {
                    message: `There was a problem in server.`
                });
            }
        });
    } else {
        callback(400, {
            message: `You have a problem in your request.`
        });
    }
};


handler._users.put = function (requestProperties, callback) {
    console.log(requestProperties.body);

    const firstName =
        (typeof requestProperties.body.firstName === `string` && requestProperties.body.firstName.trim().length > 0) ? requestProperties.body.firstName : false;

    const lastName =
        (typeof requestProperties.body.lastName === `string` && requestProperties.body.lastName.trim().length > 0) ? requestProperties.body.lastName : false;

    const phone =
        (typeof requestProperties.body.phone === `string` && requestProperties.body.phone.trim().length === 11) ? requestProperties.body.phone : false;

    const password =
        (typeof requestProperties.body.password === `string` && requestProperties.body.password.trim().length >= 6) ? requestProperties.body.password : false;

    if (phone) {
        if (password) {
            if (firstName || lastName || password) {
                // varify token 
                const token =
                    (typeof requestProperties.headersObject.token === `string` && requestProperties.headersObject.token) ? requestProperties.headersObject.token : false;
                // console.log(token, requestProperties.headersObject.token, phone);

                tokenHandler._token.varify(token, phone, function (tokenId) {
                    // console.log({ tokenId });

                    if (tokenId) {
                        // lookup the user
                        data.read(`users`, phone, function (error, u) {
                            const userData = { ...u };
                            if (!error && userData) {
                                if (firstName) {
                                    userData.firstName = firstName;
                                }
                                if (lastName) {
                                    userData.lastName = lastName;
                                }
                                if (password) {
                                    userData.password = hash(password);
                                }
                                console.log(userData);


                                // store the user to database
                                data.update(`users`, phone, userData,
                                    function (error, data) {
                                        if (!error) {
                                            callback(200, {
                                                message: `User updated successfully.`
                                            });
                                        } else {
                                            callback(500, {
                                                message: `There was a problem in server.`
                                            });
                                        }
                                    }
                                )
                            } else {
                                callback(404, {
                                    message: `Requested user was not found.`
                                });
                            }
                        });
                    } else {
                        callback(403, {
                            error: `Authentication failure!`
                        });
                    }
                });


            } else {
                callback(400, {
                    message: `You have a problem in your request.`
                });
            }
        } else {
            callback(400, {
                message: `You have a problem in your request.Password must be at least 6 characters long.`
            });
        }
    } else {
        callback(400, {
            message: `Invalid phone number. Please try again.`
        });
    }
};


handler._users.delete = function (requestProperties, callback) {
    console.log(requestProperties.queryStringObject);

    const phone =
        (typeof requestProperties.queryStringObject.phone === `string` && requestProperties.queryStringObject.phone.trim().length === 11) ? requestProperties.queryStringObject.phone : false;

    console.log(phone);

    if (phone) {
        // varify token 
        const token =
            (typeof requestProperties.headersObject.token === `string` && requestProperties.headersObject.token) ? requestProperties.headersObject.token : false;
        // console.log(token, requestProperties.headersObject.token, phone);

        tokenHandler._token.varify(token, phone, function (tokenId) {
            // console.log({ tokenId });

            if (tokenId) {


                // lookup the user
                data.read(`users`, phone, function (error, user) {
                    if (!error && user) {
                        data.delete(`users`, phone, function (error) {
                            if (!error) {
                                callback(200, {
                                    message: `User deleted successfully.`
                                });
                            } else {
                                callback(500, {
                                    message: `There was a problem in server.`
                                });
                            }
                        });
                    } else {
                        callback(500, {
                            message: `There was a problem in server.`
                        });
                    }
                });
            } else {
                callback(403, {
                    error: `Authentication failure!`
                });
            }
        });
    } else {
        callback(400, {
            message: `Invalid phone number. Please try again.`
        });
    }

};



// module exports
module.exports = handler;