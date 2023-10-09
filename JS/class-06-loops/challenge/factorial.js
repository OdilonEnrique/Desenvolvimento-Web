let num = Number(prompt("Digite o número que você quer descobrir o fatorial"));

function calcFac(numero) {
    for (let index = numero - 1; index > 0; index--) {
        numero = index * numero;
    }
    return numero;
}

alert(calcFac(num));