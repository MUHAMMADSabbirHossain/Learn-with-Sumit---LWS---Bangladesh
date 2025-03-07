// dependencies
const data = require(`./data`);
const url = require(`url`);
const http = require(`http`);
const https = require(`https`);
const { sendTwilioSms } = require(`../helpers/notifications`);



// module scaffolding
const worker = {};



// perform check
worker.performCheck = function (originalCheckData) {
    // prepare the initial check outcome
    const checkOutCome = {
        error: false,
        responseCode: false,
    };

    // mark the outcome has not been sent yet
    let outcomeSent = false;


    // parse the hostname & full url from original data
    const parseUrl = url.parse(`${originalCheckData.protocol}://${originalCheckData.url}`, true);

    const hostName = parseUrl.hostname;
    const path = parseUrl.path;

    // construct the request options
    const requestDetails = {
        protocol: `${originalCheckData.protocol}:`,
        hostname: hostName,
        method: originalCheckData.method.toUpperCase(),
        path: path,
        timeout: originalCheckData.timeoutSeconds * 1000
    };

    const protocolToUse = originalCheckData.protocol === `http` ? http : https;

    const req = protocolToUse.request(requestDetails, function (res) {
        // grab the status of the response
        const status = res.statusCode;

        // update the check outcome and pass to the next process
        checkOutCome.responseCode = status;
        if (!outcomeSent) {
            worker.processCheckOutcome(originalCheckData, checkOutCome);
            outcomeSent = true;
        }
    });

    req.on(`error`, function (error) {
        checkOutCome = {
            error: true,
            value: error
        };

        if (!outcomeSent) {
            worker.processCheckOutcome(originalCheckData, checkOutCome);
            outcomeSent = true;
        }

    });

    req.on(`timeout`, function () {
        checkOutCome = {
            error: true,
            value: `timeout`
        };

        if (!outcomeSent) {
            worker.processCheckOutcome(originalCheckData, checkOutCome);
            outcomeSent = true;
        }

    });

    // req send
    req.end();
};


// save check outcome to database and send to next process
worker.processCheckOutcome = function (originalCheckData, checkOutCome) {
    // check if check outcome is up or down
    const state = !checkOutCome.error && checkOutCome.responseCode && originalCheckData.successCodes.indexOf(checkOutCome.responseCode) > -1 ? `up` : `down`;

    // decide if alert is needed
    const alertWanted = originalCheckData.lastCheck && originalCheckData.state !== state ? true : false;

    // update the check data
    const newCheckData = originalCheckData;

    newCheckData.state = state;
    newCheckData.lastCheck = Date.now();

    // update the check to disk
    data.update(`checks`, newCheckData.id, newCheckData, function (error) {
        if (!error) {
            if (alertWanted) {
                // send the checkdata to next process
                worker.alertUserToStatusChange(newCheckData);
            } else {
                console.log(`Check outcome has not changed, no alert needed.`);
            }
        } else {
            console.log(`Error trying to save check data of one of the checks!`);

        }
    });
};


// send notification sms to user if state changes
worker.alertUserToStatusChange = function (newCheckData) {
    const msg = `Alert: Your check for ${newCheckData.method.toUpperCase()} ${newCheckData.protocol}://${newCheckData.url} is currently ${newCheckData.state}`;

    // send sms to user
    // sendTwilioSms(newCheckData.userPhone, msg, function (error) {
    //     if(!error) {
    //         console.log(`User was alerted to a status change via SMS: ${msg}`);
    //     }else{
    //         console.log(`There was a problem sending sms to one of the user!`);            
    //     }
    // });

    console.log(`User was alerted to a status change via SMS: ${msg}`);

};


// validate individual the check data
worker.validateCheckData = function (originalCheckData) {
    const originalData = { ...originalCheckData };
    if (originalData && originalData.id) {
        originalData.state =
            (typeof originalData.state === `string` && [`up`, `down`].indexOf(originalData.state) > `down`);

        originalData.lastCheck =
            (typeof originalData.lastCheck === `number` && originalData.lastCheck > 0) ? originalData.lastCheck : false;

        // pass to the next process
        worker.performCheck(originalData);
    } else {
        console.log(`Error: check was invalid or not properly formatted!`);
    }
};


// lookup all the checks
worker.gatherAllChecks = function () {
    // get all the checks
    data.list(`checks`, function (error, checks) {
        // console.log(error, checks);

        if (!error && checks && checks.length > 0) {
            checks.forEach(function (check) {
                // read the check data
                data.read(`checks`, check, function (error, originalCheckData) {
                    if (!error && originalCheckData) {
                        // pass the data to the check validator
                        worker.validateCheckData(originalCheckData)
                    } else {
                        console.log(`Error reading one of the check's data!`);
                    }
                })
            });
        } else {
            console.log(`Error: could not find any checks to process!`);
        }
    });
};


// timer to execute the worker process once per minute
worker.loop = function () {
    setInterval(function () {
        worker.gatherAllChecks();
    }, 1000 * 3);
};


worker.init = function () {
    // console.log('worker is running');

    //execute all the checks
    worker.gatherAllChecks();


    // call the loop so that checks continue
    worker.loop();

};



// module exports
module.exports = worker;