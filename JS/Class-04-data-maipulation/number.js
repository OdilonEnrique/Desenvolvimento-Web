let num1 = 2.3726472648124;
let num2 = 2372.6472648364274124;

console.log(num1);
console.log(num2);
console.log(parseInt(num1));
console.log(parseFloat(num1));
console.log(parseInt(num2));
console.log(parseFloat(num2));

console.log(String(num1).length);
console.log(String(num2).length);

console.log(String(num1).replace(".", ","));
console.log(String(num2).replace(".", ","));

console.log(num1.toFixed(2).replace(".", ","));
console.log(num2.toFixed(2).replace(".", ","));

console.log(`R$ ${num1.toFixed(2).replace(".", ",")}`);
console.log(`R$ ${num2.toFixed(2).replace(".", ",")}`);

console.log(
  num1.toLocaleString("pt-BR", { style: "currency", currency: "brl" })
);
console.log(
  num2.toLocaleString("pt-BR", { style: "currency", currency: "brl" })
);

console.log(
  num1.toLocaleString("pt-BR", { style: "currency", currency: "jpy" })
);
console.log(
  num2.toLocaleString("pt-BR", { style: "currency", currency: "jpy" })
);

// console.log(
//   num1.toLocaleString("pt-BR", { style: "currency", currency: "usd" })
// );
// console.log(
//   num2.toLocaleString("pt-BR", { style: "currency", currency: "usd" })
// );
console.log(Math.abs(num1));
console.log(Math.abs(num2));

const number = [2, 3, 4, 5, 6, 7, 8, 9, 342]

console.log(Math.max(2,3,4));
console.log(Math.max(...number));
console.log(Math.max(2,3,4));

console.log(Math.min(2,3));

console.log(Math.PI);
console.log(Math.E);

console.log(Math.random());
console.log(Math.random());
console.log(Math.random()); 

console.log(Math.random() * 10);
console.log(Math.round(2.5));

console.log(Math.round(Math.random()) * 10);
console.log(Math.round(Math.random()) * 10);
console.log(Math.round(Math.random()) * 10);
console.log(Math.round(0.99) * 10);
console.log(Math.round(0.94) * 10);
console.log(Math.ceil(2.00000001));
console.log(Math.floor(2.00000001));

console.log(Math.ceil(Math.random()* 10));
console.log(Math.floor(Math.random()* 10) + 1);
console.log(Math.ceil(Math.random()* 3));

console.log(Number(Math.random().toFixed(1)));