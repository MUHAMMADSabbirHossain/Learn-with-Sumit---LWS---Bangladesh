const screenWidth = document.querySelector("#width");
const screenHeight = document.querySelector("#height");
const availWidth = document.querySelector("#availWidth");
const availHeight = document.querySelector("#availHeight");
const colorDepth = document.querySelector("#colorDepth");
const pixelDepth = document.querySelector("#pixelDepth");

screenWidth.innerHTML = "Screen width: " + screen.width;
screenHeight.innerHTML = "Screen hight: " + screen.height;
availWidth.innerHTML = "Screen hight: " + screen.availWidth;
availHeight.innerHTML = "Screen hight: " + screen.availHeight;
colorDepth.innerHTML = "Screen hight: " + screen.colorDepth;
pixelDepth.innerHTML = "Screen hight: " + screen.pixelDepth;