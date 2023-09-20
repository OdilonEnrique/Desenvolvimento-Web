let num1 = Number(prompt("Digite o primeiro número"));

let num2 = Number(prompt("Digite o segundo número"));

let soma = num1 + num2;
let sub = num1 - num2;
let multi = num1 * num2;
let div = num1 / num2;
let rest = num1 % num2;
let pot = num1 ** num2;
let raiz1 = num1 ** (1/num2);

document.write("A soma de " + num1 + " e " + num2 + " = " + soma.toFixed(2) + "<br>");
document.write("A subtração de " + num1 + " e " + num2 + " = " + sub.toFixed(2) + "<br>");
document.write("A multiplicação de " + num1 + " e " + num2 + " = " + multi.toFixed(2) + "<br>");
document.write("A divisão de " + num1 + " e " + num2 + " = " + div.toFixed(2) + "<br>");
document.write("O resto da divisão de " + num1 + " e " + num2 + " = " + rest.toFixed(2) + "<br>");
document.write("A potência de " + num1 + " elevado a " + num2 + " = " + pot.toFixed(2) + "<br>");
document.write("A raiz " + num1 + " de  " + num2 + " = " + raiz1.toFixed(2) + "<br>");