const calc = () => {
  const max = Number(prompt("Digite o número máximo"));
  const min = Number(prompt("Digite o número mínimo"));
  const calc = (Math.floor(Math.random() * (max - min + 1))+ min);
  console.log("Esse é o número do sorteio:" + calc);
};

calc();