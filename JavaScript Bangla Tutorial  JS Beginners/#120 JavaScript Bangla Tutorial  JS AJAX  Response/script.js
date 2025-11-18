function loadData(callbackF) {
    // create a new request
    const xhr = new XMLHttpRequest();

    // what to do when response arrives
    // xhr.onload = function () {
    //     const container = document.getElementById("demo");
    //     demo.innerHTML = this.responseText;
    // };
    xhr.onload = function () {
        // callbackF(this);

        // console.log("Resoponse finished");
        const container = document.getElementById("demo");
        container.innerHTML = this.responseText;

        console.log(this.getAllResponseHeaders());
        console.log(this.getResponseHeader("etag"));
    };

    // prepare request - methods: GET, POST, PUT, PATCH, DELETE, OPTIONS
    xhr.open("GET", "./data/data.txt", true);
    // xhr.open("GET", "./data/data.txt", false);

    // add a request headere
    // xhr.setRequestHeader("MY_GF", "JavavScript");

    // send request
    xhr.send();

    // console.log("hello");
    // abort
    // xhr.abort();
}

function myCallback1(xhr) {
    const container = document.getElementById("demo");
    container.innerHTML = xhr.responseText;
}

function myCallback2(xhr) {
    const container = document.getElementById("demo2");
    container.innerHTML = xhr.responseText;
}