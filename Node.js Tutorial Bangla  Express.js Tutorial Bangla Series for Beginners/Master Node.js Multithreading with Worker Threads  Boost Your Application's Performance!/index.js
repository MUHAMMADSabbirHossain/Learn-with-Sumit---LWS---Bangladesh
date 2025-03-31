const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const { Worker, } = require('worker_threads');
const THREAD_COUNT = 4;

function createWorker() {
    return new Promise((resolve, rejects) => {
        const worker = new Worker(__dirname + '/worker-opt.js', {
            workerData: {
                thread_count: THREAD_COUNT,
            }
        });

        worker.on('message', (data) => {
            resolve(data);
        });

        worker.on('error', (error) => {
            rejects(error);
        });
    });
}

app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
});

app.get("/non-blocking", (req, res) => {
    res.status(200).send("This is a non-blocking request.");
});

/* app.get("/blocking", (req, res) => {
    let result = 0;
    for (let i = 0; i < 10000000000; i++) { result += 1; }
    res.status(200).send("This is a blocking request. Result: " + result);
}); */

app.get("/blocking", (req, res) => {
    // let result = 0;
    // for (let i = 0; i < 10000000000; i++) { result += 1; }

    const worker = new Worker(__dirname + '/worker.js', {
        workerData: {
            thread_count: THREAD_COUNT,
        }
    });

    worker.on('message', (result) => {
        res.status(200).send("This is a blocking request. Result: " + result);
    });

    worker.on('error', (error) => {
        res.status(500).send("This is a blocking request. Error: " + error);
    });

});

app.get("/opt-blocking", async (req, res) => {
    const workerPromises = [];
    for (let i = 0; i < THREAD_COUNT; i++) {
        workerPromises.push(createWorker());
    }

    const threadResults = await Promise.all(workerPromises);

    const total = threadResults.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    res.status(200).send("This is a blocking request. Result: " + total);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});