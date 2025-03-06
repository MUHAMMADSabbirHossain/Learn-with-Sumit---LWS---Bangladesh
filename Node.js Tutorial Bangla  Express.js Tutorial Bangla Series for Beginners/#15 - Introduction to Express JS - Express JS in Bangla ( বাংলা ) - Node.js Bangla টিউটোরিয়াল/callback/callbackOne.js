const callbackOne = {};



callbackOne.hello = (param, callback) => {

    return callback(param);
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(callback(param));
    //     }, 3000);
    // })

};



module.exports = callbackOne;