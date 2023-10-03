let num1 = Number(prompt("Digite o primeiro número"));

let num2 = Number(prompt("Digite o segundo número"));

const soma = num1 + num2;
const sub = num1 - num2;
const multi = num1 * num2;
const div = num1 / num2;
const rest = num1 % num2;
const pot = num1 ** num2;
const raiz1 = num1 ** (1/num2);

document.write("A soma de " + num1 + " e " + num2 + " = " + soma + "<br>");
document.write("A subtração de " + num1 + " e " + num2 + " = " + sub+ "<br>");
document.write("A multiplicação de " + num1 + " e " + num2 + " = " + multi + "<br>");
document.write("A divisão de " + num1 + " e " + num2 + " = " + div.toFixed(2) + "<br>");
document.write("O resto da divisão de " + num1 + " e " + num2 + " = " + rest + "<br>");
document.write("A potência de " + num1 + " elevado a " + num2 + " = " + pot + "<br>");
document.write("A raiz " + num1 + " de  " + num2 + " = " + raiz1.toFixed(2) + "<br>");