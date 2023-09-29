let nascYear = Number(prompt("Digite o ano que você nasceu"));

let dateNow = new Date();

const year = Number(dateNow.getFullYear());

const idade = year - nascYear;


alert("Você vai completar ou já completou " + idade + " esse ano.");
