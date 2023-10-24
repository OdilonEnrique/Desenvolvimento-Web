// ⚠Desafio 18 

// Crie uma lógica para calcular o somatório das Receitas e das Despesas abaixo
// Imprima os somatórios e o saldo formatado no padão brasileiro,
// Informe se a situação está Positiva ou Negativa e se existe dívidas.

const incomes = ["salary", "R$ 2000,00", "commission", "R$ 825,45", "bônus", "R$ 320,00"];

const expenses = ["rent", "R$ 500,00", "energy", "R$ 325,55", "water", "R$ 120,34", "food", "R$ 1300,62"];

const sumIncomes = incomes.filter(value => value.includes("R$ "));

