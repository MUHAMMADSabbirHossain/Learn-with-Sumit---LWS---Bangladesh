const appName = document.querySelector("#appName");
const appCodeName = document.querySelector("#appCodeName");
const platform = document.querySelector("#platform");
const cookieEnabled = document.querySelector("#cookieEnabled");
const product = document.querySelector("#product");
const appVersion = document.querySelector("#appVersion");
const userAgent = document.querySelector("#userAgent");
const onLine = document.querySelector("#onLine");
const language = document.querySelector("#language");
const javaEnabled = document.querySelector("#javaEnabled");

// show window.navigator object property values
appName.innerHTML = "Navigator appName: " + navigator.appName;
appCodeName.innerHTML = "Navigator appCodeName: " + navigator.appCodeName;
platform.innerHTML = "Navigator platform: " + navigator.platform;
cookieEnabled.innerHTML = "Navigator cookieEnabled: " + navigator.cookieEnabled;
product.innerHTML = "Navigator product: " + navigator.product;
appVersion.innerHTML = "Navigator appVersion: " + navigator.appVersion;
userAgent.innerHTML = "Navigator userAgent: " + navigator.userAgent;
onLine.innerHTML = "Navigator onLine: " + navigator.onLine;
language.innerHTML = "Navigator language: " + navigator.language;
javaEnabled.innerHTML = "Navigator javaEnabled: " + navigator.javaEnabled;