/* const paymentSuccess = true;
const marks = 70;

function enroll(callback) {
    console.log("Course enrollment is in progress.");

    setTimeout(function () {
        if (paymentSuccess) {
            callback();
        } else {
            console.log("Payment failed!");
        }
    }, 2000);
}

function progress(callback) {
    console.log("Course on progress...");

    setTimeout(function () {
        if (marks >= 80) {
            callback();
        } else {
            console.log("You could not get enough marks to get the certificate");
        }
    }, 3000);
}

function getCertificate() {
    console.log("Preparing your certificate!");

    setTimeout(() => {
        console.log("Congrats! you got the certificate");
    }, 1000);
}

// enroll(progress);
// progress(getCertificate);

// enroll(function () {
//     progress(getCertificate);
// });

// call back hell
enroll(function () {
    progress(
        C(function () {
            D(function () {
                E(function () {
                    F();
                });
            });
        })
    );
}); */


/* // promises
const status = false;

console.log('Task 1');
// promise defination
const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        if (status) {
            // console.log('Task 2');
            resolve('Task 2');
        } else {
            reject('failed');
        }
    }, 2000);
});
// promise call
promise
    .then(function (value) {
        console.log(value);
    })
    .catch(function (err) {
        console.log(err);
    })

console.log('Task 3'); */


const paymentSuccess = true;
const marks = 90;

function enroll() {
    console.log('Course enrollment is in progress.');

    const promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (paymentSuccess) {
                resolve();
            } else {
                reject('Payment failed!');
            }
        }, 2000);
    });

    return promise;
}

function progress() {
    console.log('Couse on progress...');

    const promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (marks >= 80) {
                resolve();
            } else {
                reject('You could not get enough marks to get the certificate');
            }
        }, 3000);
    });

    return promise;
}

function getCertificate() {
    console.log('Prepering you certificate!');

    const promise = new Promise(function (resolve) {
        setTimeout(() => {
            resolve("congrats! You got the certificate");
        }, 1000);
    });

    return promise;
}

enroll()
    .then(progress)
    .then(getCertificate)
    .then(function (value) {
        console.log(value);
    })
    .catch(function (err) {
        console.log(err);
    })


/* const paymentSuccess = true;
// const paymentSuccess = false;
const marks = 90;

function enrollment() {
    console.log("Enrollment is proccessing...");

    const promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (paymentSuccess) {
                console.log("Successfully payment.");
                resolve();
            } else {
                reject("Please failed!");
            }
        }, 3000);
    });

    return promise;
}

function proccessing() {
    console.log("The course is countinue...");

    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (marks >= 80) {
                resolve();
            } else {
                reject("Your marks is too low for certificate.");
            }
        }, 2000);
    });

    return promise;
}

function getCertificate() {
    console.log('Prepering you certificate!');
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("congrats! You got the certificate")
        }, 1000);
    });

    return promise;
}

enrollment()
    .then(proccessing)
    .then(getCertificate)
    .then(function (value) {
        console.log(value);
    })
    .catch(function (error) {
        console.log(error);
    }); */

