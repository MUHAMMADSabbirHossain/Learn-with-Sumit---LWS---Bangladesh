/* async function hello() {
    // body
    await return "Hello";
}

console.log(hello()); */


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
    console.log('Course on progress...');

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

async function course() {
    try {
        // enroll();
        // progress();
        // const messagetest = getCertificate();
        // console.log(messagetest);

        await enroll();
        await progress();
        const message = await getCertificate();

        console.log(message);;
    } catch (err) {
        console.log(err);
    }

}
course();

// enroll()
//     .then(progress)
//     .then(getCertificate)
//     .then(function (value) {
//         console.log(value);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })

