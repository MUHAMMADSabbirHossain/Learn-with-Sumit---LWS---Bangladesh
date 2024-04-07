function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function getLocalStorage(key) {
    alert(localStorage.getItem(key));
}

function removeLocalStorage(key) {
    localStorage.removeItem(key);
}

function clearLocalStorage() {
    localStorage.clear();
}


function setSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
}

function getSessionStorage(key) {
    alert(sessionStorage.getItem(key));
}

function removeSessionStorage(key) {
    sessionStorage.removeItem(key);
}

function clearSessionStorage() {
    sessionStorage.clear();
}