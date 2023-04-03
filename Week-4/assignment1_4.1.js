var Promise = require('promise');
const getNumber = () => {
    const number = Math.trunc(Math.random() * 100);
    console.log('number :>>', number);
    return number;
}

const p = new Promise((resolve, reject) => {
    if (getNumber() % 5 !== 0) {
        reject("Not visible by 5");
    }
    else {
        resolve("Divisible by 5");
    }
})


p.then((res) => console.log("Promise resolved :", res)).catch(err => console.log("promise reject :", err))