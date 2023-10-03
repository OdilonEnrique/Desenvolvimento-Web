const weekDay = new Date().getDay();
const month = new Date().getMonth();

console.log(weekDay);

switch (weekDay) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Segunda");
    break;
  case 2:
    console.log("Terça");
    break;
  case 3:
    console.log("Quarta");
    break;
  case 4:
    console.log("Quinta");
    break;
  case 5:
    console.log("Sexta");
    break;
  case 6:
    console.log("Sábado");
    break;
  default:
    console.log("Dia não encontrado");
    break;
}

switch (month) {
  case 0:
  case 1:
  case 2:
    console.log("Primavera");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Verão");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Outono");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Inverno");
    break;

  default:
    console.log("Não é um mês");
    break;
}

const message = Number(prompt(`
Digite o número de acordo com o que você busca:
    1-Consulta
    2-Atendimento
    3-Sair
`));

switch (message) {
  case 1:
    alert("Vamos agendar a consulta");
    break;
  case 2:
    alert("Vamos transferir para um atendente");
    break;
  case 3:
    alert("Obrigado, volte sempre!");
    break;
  default:
    alert("Número inválido");
    break;
}
