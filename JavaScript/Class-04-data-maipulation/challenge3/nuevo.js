const dateWasBorn = new Date(
  prompt("Digite a data de seu nascimento no padrão (yyyy-mm-dd)")
);

const dateNow = new Date();
const userAge = Math.floor((dateNow - dateWasBorn) / 1000 / 60/ 60 / 24 / 365.25);
/* Vc está pegando uma data com o prompt, depois a data atual, com o floor o resultado vai sempre ser arredondado pra baixo, vc está diminuindo o valor da data atual com a do nascimento, o resultado está em milissegundos, vc transforma em segundos, depois minutos, depois hora, depois dias e por fim anos, assim o resultado sempre vai ser a idade do usuário*/ 
console.log(userAge);
