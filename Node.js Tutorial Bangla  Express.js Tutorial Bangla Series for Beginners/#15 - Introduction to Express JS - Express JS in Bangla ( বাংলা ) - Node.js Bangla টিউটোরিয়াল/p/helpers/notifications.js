// dependencies
const https = require('https');
const environment = require(`./environment`);
const querystring = require('querystring');



// module scaffolding
const notifications = {};



// send sms to user using twilio api
notifications.sendTwilioSms = function (phone, msg, callback) {
    // input validation
    const userPhone =
        (typeof phone === 'string' && phone.trim().length === 11) ? phone.trim() : false;

    const userMsg =
        typeof msg === 'string' && msg.trim().length > 0 && msg.trim().length <= 1600 ? msg.trim() : false;

    if (userPhone && userMsg) {
        // configure the request payload
        const payload = {
            From: environment.config.twilio.fromPhone,
            To: `+88${userPhone}`,
            Body: userMsg
        };

        // stringify the payload
        const stringPayload = querystring.stringify(payload);

        // configure the request details
        const requestDetails = {
            hostname: `api.twilio.com`,
            method: `POST`,
            path: `/2010-04-01/Accounts/${environment.config.twilio.accountSid}/Messages.json`,
            auth: `${environment.config.twilio.accountSid}:${environment.config.twilio.authToken}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        console.log(requestDetails, stringPayload);


        // instantiate the request object
        const req = https.request(requestDetails, function (res) {
            // get the status of the sent request
            const status = res.statusCode;
            // callback successfully if the request went through
            if (status === 200 || status === 201) {
                callback(false);
            } else {
                callback(500, {
                    error: `There was an error with the status code ${status}`
                });
            }
        });

        req.on('error', function (e) {
            callback(500, {
                error: `Could not send notification to user: ${e.message}`
            });
        });

        req.write(stringPayload);
        req.end();
    } else {
        callback(400, { 'error': 'Invalid phone number or message' });
    }
};



// module exports
module.exports = notifications;