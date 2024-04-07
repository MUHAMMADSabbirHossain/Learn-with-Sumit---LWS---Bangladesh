/* const display = document.getElementById("display");

function getData() {
    fetch("http://127.0.0.1:5500/JavaScript%20Bangla%20Tutorial%20%20JS%20Bangla%20Tutorial%20Series%20for%20Beginners/%23115%20JavaScript%20Bangla%20Tutorial%20%20Web%20API%20%20Fetch%20API/data.txt")
        .then(res => res.text())
        .then(data => {
            // console.log("hello 2");
            display.innerText = data;
        });
    console.log("hello");
} */

const display = document.getElementById("display");

async function getData() {
    const res = await fetch("http://127.0.0.1:5500/JavaScript%20Bangla%20Tutorial%20%20JS%20Bangla%20Tutorial%20Series%20for%20Beginners/%23115%20JavaScript%20Bangla%20Tutorial%20%20Web%20API%20%20Fetch%20API/data.txt");
    const data = await res.text();
    display.innerText = data;
    console.log("hello");
}