const arrayNumbers = [7, 2, 4, 5, 7, 8, 9, "7", 40]

const value = arrayNumbers.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;

})

const arraySorted1 = arrayNumbers.sort((a,b) => a - b)
const arraySorted2 = arrayNumbers.sort((a,b) => b - a)

console.log(value.join("-"));
console.log(arrayNumbers.join("-"));
console.log(arraySorted1.join("-"));
console.log(arraySorted2.join("-"));

const arrayNames = ["Pedrinho", "eduardo", "Luiza", "Érik"]

arrayNames.sort((a,b) => a - b)
arrayNames.sort((a,b) => {
    a = a.toUpperCase();
    b = b.toUpperCase();
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
})

console.log(arrayNames.join("-"));

arrayNames.sort((a,b) => a.localeCompare(b))
arrayNumbers.sort((a,b) => String(a).localeCompare(b))

console.log(arrayNames.join("-"));
console.log(arrayNumbers.join("-"));