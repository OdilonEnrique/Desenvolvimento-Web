const palindromo = () => {
  const palavra = prompt("Digite uma palavra");
  const palindromo = palavra.split("").reverse().join("");
  document.write(
    palavra == palindromo ? "É um palíndromo" : "Não é um palíndromo"
  );
};

palindromo();
