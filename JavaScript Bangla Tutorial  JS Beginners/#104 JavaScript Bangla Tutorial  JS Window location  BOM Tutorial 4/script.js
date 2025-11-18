const href = document.querySelector("#href");
const hostname = document.querySelector("#hostname");
const pathname = document.querySelector("#pathname");
const protocol = document.querySelector("#protocol");
const port = document.querySelector("#port");

// show window.location object property values
href.innerHTML = "Window href: " + location.href;
hostname.innerHTML = "window hostname: " + location.hostname;
pathname.innerHTML = "window pathname: " + location.pathname;
protocol.innerHTML = "window protocol: " + location.protocol;
port.innerHTML = "window port: " + location.port;

function loadw3s() {
    window.location.assign("https://www.w3schools.com");
}