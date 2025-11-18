/* const demo = document.getElementById("demo");
let i = 0;
while (i < 10000000) {
    i++;
    console.log(i);
}

demo.innerHTML = i; */

let w;
function startWorker() {
    // worker available

    // if w worker is not already defined
    if (typeof Worker !== "undefined") {
        if (typeof w == 'undefined') {
            // create a new worker challed "w"
            w = new Worker("worker.js");
        }

        // listening for worker events/message
        w.onmessage = function (event) {
            console.log(event);
            document.getElementById("demo").innerHTML = event.data;
        }
    } else {
        alert("Your browser does not support web worker!");
    }
}


function stopWorker() {
    if (typeof Worker !== 'undefined') {
        w.terminate();
        w = undefined;
    } else {
        alert("Your browser does not support web worker!");
    }
}

