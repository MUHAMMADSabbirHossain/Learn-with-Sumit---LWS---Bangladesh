const callbackOne = require('./callbackOne');



const app = {};



app.init = async function () {

    // const result = await callbackOne.hello('world...', function (param) {
    //     // console.log(`param: Hello ${param}`);
    //     // return param;

    //     // return new Promise((resolve, reject) => {
    //     //     resolve(param);
    //     // })
    // });

    // console.log(result);


    function getData(callback) {
        // setTimeout(() => {
        //     callback('Async response received!');
        // }, 2000);

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('Async response received!');
            }, 1000);
        });
    }

    // Using async/await with a callback
    async function main() {
        let message;
        const response = await getData((response) => {
            message = response;
            console.log(message); // Console logs after 1 second

            return message;
        });
        console.log(response);
    }

    main();;

};



app.init();


















/* Yes, you can use setTimeout() with a callback without using new Promise, but you cannot await it directly. Instead, you handle it in the callback itself.

Without Promise (Using Callbacks)

function getData(callback) {
    setTimeout(() => { 
        callback('Async response received!'); 
    }, 2000);
}

function main() {
    getData((message) => {
        console.log(message); // Logs after 2 seconds
    });
}

main();
👉 Key Point:

Since setTimeout is non-blocking and works asynchronously, you cannot return the value from getData() directly.
Instead, pass a callback to handle the response after the delay.
What If You Need async/await?
To use async/await, you must wrap setTimeout inside a Promise:

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Async response received!');
        }, 2000);
    });
}

async function main() {
    const message = await getData();
    console.log(message);
}

main();
Without Promise, you must rely on callbacks instead of await. 🚀 */