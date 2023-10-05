let numero = Number(prompt("Digite o número que você quer descobrir o fatorial"));;

for (let index = numero-1; index > 0; index--) {
    numero = index * numero;
}
alert(numero);