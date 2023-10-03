const palindromo = () => {
  const palavra = prompt("Digite uma palavra");
  const palindromo = palavra.split("").reverse().join("");
  return palindromo == palavra;
};

document.write(
  palindromo() ? "É um palíndromo" : "Não é um palíndromo"
);
