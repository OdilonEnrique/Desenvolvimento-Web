let num1 = parseInt(prompt("Digite o primeiro número"));

let num2 = parseInt(prompt("Digite o segundo número"));

let soma = num1 + num2;
let sub = num1 - num2;
let multi = num1 * num2;
let div = num1 / num2;
let rest = num1 % num2;
let pot = num1 ** num2;
let raiz1 = num1 ** (1/num2);

document.write("A soma de " + num1 + " e " + num2 + " = " + soma + "<br>");
document.write("A subtração de " + num1 + " e " + num2 + " = " + sub + "<br>");
document.write("A multiplicação de " + num1 + " e " + num2 + " = " + multi + "<br>");
document.write("A divisão de " + num1 + " e " + num2 + " = " + div + "<br>");
document.write("O resto da divisão de " + num1 + " e " + num2 + " = " + rest + "<br>");
document.write("A potência de " + num1 + " elevado a " + num2 + " = " + pot + "<br>");
document.write("A raiz " + num1 + " de  " + num2 + " = " + raiz1 + "<br>");
