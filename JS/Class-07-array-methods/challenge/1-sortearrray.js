// ⚠Desafio 17

// Escreva uma lógica que soteie os números da loteria de 1 a 25
// Devem ser sorteados 15 números aleatoriamente
// Apresente o resultado de forma ordenada

// const array = []

// for (let index = 0; array.length < 15 ; index++) {
//     const a = Math.ceil(Math.random()* 25);
//     array.push(a);
// }
// const orderArray = array.sort((a,b) => a - b)

// console.log(orderArray.join("-"));

const arrayNumbers = Array.from({ length: 25 },(value, index) => index + 1).sort(() => Math.random() - 0.5).filter((value, index) => index < 15).sort((a,b) => a - b);

console.log(arrayNumbers.join("-"));