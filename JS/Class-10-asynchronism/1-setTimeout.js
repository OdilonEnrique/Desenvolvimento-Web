console.log("Antes");

const timeout = setTimeout(() => {
    console.log("setTimeout");
}, 0)

console.log("Depois");


let count = 0;
const interval = setInterval(() => {
    console.log(`setInterval ${count}`);
    count++;

if (count === 10) {
    clearInterval(setTimer)
}
}, 1000)

console.log(timeout);
console.log(interval);

