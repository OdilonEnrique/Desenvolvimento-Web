let nome = prompt("Digite o nome do jogo");

let genero = prompt("Digite o gênero do jogo");

let ano = prompt("Digite o ano de lançamento do jogo");

let jogo = {
    name: nome,
    genero: genero,
    ano: ano,
}

console.log("O nome do jogo é: " + jogo.name);
console.log("O gênero do jogo é: " + jogo.genero);
console.log("O ano de lançamento do jogo é: " + jogo.ano);