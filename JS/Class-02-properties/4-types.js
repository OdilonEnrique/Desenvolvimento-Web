// Binary
let n1 = 8
let n2 = 7
console.log(n1 + n2)
console.log("Test " + n2)

// Unary
console.log(n1++)
console.log(n1)
console.log(++n1)
console.log(typeof n2)
const fruits = ['banana', 'maçã', "Uva"]
delete fruits[1]
console.log(fruits)

// Ternary
let test = false;

console.log(test ? "Isto é verdadeiro" : "Isto é falso");

console.log(3 != 4 ? "AAA" : "bbb");

const average = 7;

console.log(average >= 7 ? "Aprovado" : "Reprovado");

const average1 = 2;

console.log(average1 >= 7 ? "Aprovado" : "Reprovado");

// Truthy Falsy
console.log(1 ? "Isto é verdadeiro" : "Isto é falso");
console.log(0 ? "Isto é verdadeiro" : "Isto é falso");
console.log(1.5 ? "Isto é verdadeiro" : "Isto é falso");
console.log(-1 ? "Isto é verdadeiro" : "Isto é falso");
console.log(" " ? "Isto é verdadeiro" : "Isto é falso");
console.log("" ? "Isto é verdadeiro" : "Isto é falso");
console.log(undefined ? "Isto é verdadeiro" : "Isto é falso");
console.log([] ? "Isto é verdadeiro" : "Isto é falso");
console.log({} ? "Isto é verdadeiro" : "Isto é falso");
console.log(null ? "Isto é verdadeiro" : "Isto é falso");
console.log(NaN ? "Isto é verdadeiro" : "Isto é falso");
console.log(1 ? "Isto é verdadeiro" : "Isto é falso");

