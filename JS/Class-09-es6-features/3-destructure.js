const numbers = [1, 21, 33, 45]

console.log(numbers);
// spread

console.log(...numbers);
console.log(Math.max(...numbers));

// destructure

const array = ["A", "B"]
const [item1, item2] = array
console.log(array);
console.log(item1);
console.log(item2);

// rest

function showArray(array, ...items){
    console.log(array);
    console.log(items);
}

showArray(array, "X", "Y", "Z")
