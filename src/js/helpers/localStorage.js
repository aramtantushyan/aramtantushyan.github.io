function setToLocalStorage (key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage (key) {
    return JSON.parse(localStorage.getItem(key));
}

export {setToLocalStorage};
export {getFromLocalStorage};