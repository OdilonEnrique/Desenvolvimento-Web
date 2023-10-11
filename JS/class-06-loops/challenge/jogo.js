// Crie um jogo que adivinhe um número de 1 a 10
// O jogo encerra quando acertar o número e apresenta quantas tentativas levou
// O programa deve ser encerrado caso o usuário clique em cancelar

const random = Math.ceil(Math.random() * 10);
console.log(random);

let promptA;
let numero = 0;

do {
  promptA = prompt(
    "A máquina realizou um sorteio entre os números de 1 a 10: Tente adivinhar esse número"
  );

  if (promptA === null) {
    alert("Você cancelou o jogo");
    break;
  }

  promptA = Number(promptA);
  console.log(numero++);

  if (promptA >= 1 && promptA <= 10) {
    console.log(promptA);
  } else {
    alert("Você digitou algo incorreto! Tente de novo");
  }
} while (promptA != random);

if (promptA === random) {
  alert(`Você acertou
        O número era :  ${random}
        Você acertou em ${numero} tentativas
    `);
}
