// ⚠Desafio 18 

// Crie uma lógica para calcular o somatório das Receitas e das Despesas abaixo
// Imprima os somatórios e o saldo formatado no padão brasileiro,
// Informe se a situação está Positiva ou Negativa e se existe dívidas.

const incomes = ["salary", "R$ 2000,00", "commission", "R$ 825,45", "bônus", "R$ 320,00"];

const expenses = ["rent", "R$ 500,00", "energy", "R$ 325,55", "water", "R$ 120,34", "food", "R$ 1300,62"];

// const sumIncomes = incomes.filter(value => value.includes("R$ "));

// const removeReal = sumIncomes.map((value) => {
//   return value.replaceAll("R$ ", "");
// });

// const removeVirgula = removeReal.map((value) => {
//     return value.replaceAll(",", ".");
//   });

// const transformNumber = removeVirgula.map((value) => {
//     const number = Number(value)
//     return number;
// });

// const receitaTotal = transformNumber.reduce((prevValue, currentValue) => {
//     return prevValue + currentValue;
// }, 0)

// const sumExpenses = expenses.filter(value => value.includes("R$ "));

// const removeSimbol = sumExpenses.map((value) => {
//     return value.replaceAll("R$ ", "");
//   });
  
//   const addPoint = removeSimbol.map((value) => {
//       return value.replaceAll(",", ".");
//     });
  
//   const numeroDespesas = addPoint.map((value) => {
//       const number = Number(value)
//       return number;
//   });
  
//   const despesaTotal = numeroDespesas.reduce((prevValue, currentValue) => {
//       return prevValue + currentValue;
//   }, 0)
  
//   const saldo = receitaTotal - despesaTotal;

// console.log(sumIncomes);
// console.log(`Sua receita é de : R$ ${receitaTotal.toFixed(2).replace(".", ",")}`);
// console.log(`Sua despesa é de : R$ ${despesaTotal.toFixed(2).replace(".", ",")}`);
// console.log(`Sua posição está ${receitaTotal - despesaTotal > 0 ? "Positiva" : "Negativa"} com o saldo de: R$ ${saldo.toFixed(2).replace(".", ",")}`);

const incomeValues = incomes.filter((value) => value.includes("R$ "))

const incomesValuesNumber = incomeValues.map((value) => {
  return Number(value.replace("R$ ", "").replace(",", "."))
})

const sumIncomes = incomesValuesNumber.reduce((a, b) => a + b)

// console.log(incomeValues);
// console.log(incomesValuesNumber);
// console.log(sumIncomes);
console.log(sumIncomes.toLocaleString("pt-BR", {
  style: "currency",
  currency: "brl"
}));

const expensesValues = expenses.filter((value) => value.includes("R$ "))

const expensesValuesNumber = expensesValues.map((value) => {
  return Number(value.replace("R$ ", "").replace(",", "."))
})

const sumExpenses = expensesValuesNumber.reduce((a, b) => a + b)

// console.log(expensesValues);
// console.log(expensesValuesNumber);
// console.log(sumExpenses);

console.log(sumExpenses.toLocaleString("pt-BR", {
  style: "currency",
  currency: "brl"
}));

let situation;

if (sumIncomes > sumExpenses) {
  situation = "Saldo Positivo!"
} else if (sumIncomes < sumExpenses) {
  situation = "Saldo Negativo!"
} else if (sumIncomes === sumExpenses) {
  situation = "Sem saldo, mas sem dívidas"
}

console.log(situation);