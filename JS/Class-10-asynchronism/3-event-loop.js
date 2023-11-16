// Task
setTimeout(() => {
    console.log(2);
})

// Call stack
console.log(1);

// Microtask
queueMicrotask(() => {
    console.log(3);
})

// Microtask
Promise.resolve().then(() => {
    console.log(4);
})

// Call stack
for (let log = 0; log < 20; log++) {
    const element = log;
    console.log(element);
}