function fabocci(numero) {
  if (numero === 0) return null;
  if (numero === 1) return 1;
  let array = [0, 1];

  for (let index = 2; index < numero; index++) {
    array[index] = array[index - 1] + array[index - 2];
  }
  return array;
}

const promp = Number(
  prompt(
    "Digite a quantidade de etapas você quer exibir da sequência de fabocci:"
  )
);

const result = fabocci(promp);

document.write(result + "<br>");
