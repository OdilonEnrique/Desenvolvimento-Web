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

const arrayAnimes = [
    {name: "Cavaleiros do Zodíaco", year: 1986},
    {name: "Draggon Ball", year: 1984},
    {name: "Digimon", year: 1997},
    {name: "Naruto", year: 1997},
    {name: "Jaspion", year: 1985},
]

// const sortedArrayAnimes = arrayAnimes.sort((a, b) => {
//     if (a.year > b.year) return 1;
//     if (a.year < b.year) return -1;
//     return 0;});

// console.table(sortedArrayAnimes)

//  Uma estrutura modifica a outra então tome cuidado quando for fazer algo

// console.log(arrayAnimes.sort((a,b) => b.year - a.year));
// console.log(arrayAnimes.sort((a,b) => a.year - b.year));

// console.table(arrayAnimes.sort((a,b) => {
//     a.name.localeCompare(b.name)
// }))
// //  Uma estrutura modifica a outra então tome cuidado quando for fazer algo
// console.table(arrayAnimes.sort((a,b) => {
//     a["name"].localeCompare(b.name);
// }))

const sortedArrayAnimes = arrayAnimes.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;});

console.table(sortedArrayAnimes)

console.log(arrayAnimes.sort((a,b) => b.name - a.name));
console.log(arrayAnimes.sort((a,b) => a.name - b.name));

