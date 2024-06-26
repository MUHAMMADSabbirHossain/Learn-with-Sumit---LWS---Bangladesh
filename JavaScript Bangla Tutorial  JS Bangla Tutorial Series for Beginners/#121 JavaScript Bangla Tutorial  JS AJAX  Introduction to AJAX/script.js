function sendRequest(method, url, data) {

    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest;
        xhr.onload = function () {
            // handle application error
            if (this.status >= 400) {
                reject(`There was an application error and the status is ${this.status} and response taxt is ${this.statusText}`)
            }
            resolve(this.response);
        };
        xhr.onerror = function () {
            reject("There was an error: ");
        }
        xhr.open(method, url);
        xhr.responseType = "json";
        xhr.send(data);
    });
    return promise;
}

function getData() {
    /* const xhr = new XMLHttpRequest;
    xhr.onload = function () {
        // console.log(this.responseText);
        // console.log(typeof this.responseText);
        // console.log(JSON.parse(this.responseText));
        console.log(this.response);
    };
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
    xhr.responseType = "json";
    xhr.send(); */

    sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/1")
        .then(responseData => {
            console.log(responseData);
        })
        .catch(err => {
            console.log(err);
        });
}

function sendData() {
    sendRequest(
        "POST",
        "https://jsonplaceholder.typicode.com/posts",
        JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        })
    ).then(responseData => {
        console.log(responseData);
    })
}

const getButton = document.getElementById("get");
const sendButton = document.getElementById("send");

getButton.addEventListener("click", getData);
sendButton.addEventListener("click", sendData);