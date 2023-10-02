const nota1 = Number(prompt("Digite sua primeira nota"));
const nota2 = Number(prompt("Digite sua segunda nota"));

const media = (nota1, nota2) => {
  return (nota1 + nota2) / 2;
};

if (media(nota1, nota2) >= 7.0) {
  document.write(" Você está aprovado, sua média é:" + media(nota1, nota2));
} else {
  document.write(" Você está reprovado, sua média é:" + media(nota1, nota2));
}