// Avaliação JavaScript


// Questão 1 (Data Types):
// Declare as seguntes variáveis e atribua os valores por tipo: Sting, Number, Boolean, Function, Array, Object

const string = "Eu estou aqui"
const numero = 3;
const boolean = true;
const funcao = () => {

}
const object = {}
const array = ["ama", []]

console.log(typeof string);
console.log(typeof numero);
console.log(typeof boolean);
console.log(typeof object);
console.log(typeof funcao);

// Questão 2 (Operators):
// Imprima as operações de soma, subtração, multiplicação, divisão, resto da divisão e potenciação de 12 e 3 e raiz quadrada de 144;
const soma = 12 + 3;
const subtracao = 12 - 3;
const multiplicacao = 12 * 3;
const divisao = 12 / 3;
const potenciacao = 12 ** 3;
const radiciacao = 144 ** (1 / 2);


console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(potenciacao);
console.log(radiciacao);

// Questão 3 (Functions):
// Crie e execute uma função de nome 'test" que retorne "JavaScript" concatenado com um valor passado como argumento e imprima seu retorno.
const apelido = "Bom";

function teste(adjetivo) {
    return "JavaScript " + adjetivo
}

console.log(teste(apelido));

// Questão 4 (Data Manipulation):
// Usando os métodos FIFO e LIFO, crie um array com 3 valos e posteriormente insira mais um valor no final e substitua o do início por outro.
const array4 = [1, 2, 3]

array4.push(4)

array4.shift();

array4.unshift(0)

console.log(array4);


// Questão 5 (for):
// Liste todos os valores do array criado na questão anterior ultilizando o for.

for (let index = 0; index < array4.length; index++) {
    const element = array4[index];
    console.log(element);
    
}

// Questão 6 (while):
// Escreva os números de 0 a 500 sem os que pertencem à familía do 200 e do 300:
let i = 0;
while(i <= 500){
    if (i>= 200 && i<400) {
        i++
        continue;
    }
    console.log(i);
    i++
}

// Questão 7 (if):
// Crie uma lógica para verificar se o motorista foi multado
// A infração pode ser por velocidade alta (quando ultrapassar a máxima)
// E por velocidade baixa ( quando estiver inferior à metade da máxima )
// A velocidade da pista é de 60km/h
const a = 45;

if (60 < a) {
    console.log("Você foi multado por ultrapassar a velocidade");
} else if (60/2 > a){
    console.log("Você foi multado por velocidade baixa");
} else{
    console.log("Você não foi multado");
}


// Questão 8 (array methods):
// Uma empresa vai dar 10% de aumento para seus funcionários
// Abaixo tem a lista com todos os salários atuais de cada um deles
// Apresente os novos salários e o novo total em folha dessa empresa
const salary = [2000, 2800, 3000, 4000, 2200, 7500, 3650, 8000, 2000, 5000];

const salaryConverted = salary.map((value) => {
  return (value * 0.1) + value;
});

const sumNewSallary = salaryConverted.reduce((prevValue, currentValue) => {
    return prevValue + currentValue;
}, 0)

console.log(`Este é o novo salário dos funciocnários ${salaryConverted}, a soma geral entre eles é ${sumNewSallary}`);



