// Paradigmas
// Métodos - ações(funções)
// Atributos - características (variáveis)
// Entidade do mundo real
// This = Scope

class Brush {
    constructor (color, height) {
        this.colorName = color;
        this.height = height;
    }

    action() {
        return "Escreve"
    }
}

const blueBrush = new Brush("blue", 10);
const redBrush = new Brush("red", 12);
console.log(blueBrush.colorName);
console.log(blueBrush.height);
console.log(redBrush.colorName);
console.log(redBrush.height);

redBrush.action();

class Ben10 {
    constructor(nome, poder, forca, tempo, health) {
        this.name = nome;
        this.power = poder;
        this.forca = forca;
        this.time = tempo;
        this.health = health;
    }

    attack() {
        console.log(`${this.name} atacou!`);
    }

    damage(damage, effective){
        if (effective) {
            this.health -= damage * 1.3;
            // console.log(`${this.name} sofreu `);
        }else{
            this.health -= damage;
        } 
    }
}

const enormossauro = new Ben10("enormossauro", "Force", 500, "3 min", 10000)
const massaCizenta = new Ben10("Massa Cizenta", "Inteligência", 10, "20 min", 1000)
const Chama = new Ben10("Chama", "Fogo", 250, "10 min", 2500)
console.log(enormossauro.name);
console.log(enormossauro.power);
console.log(massaCizenta.time);
console.log(massaCizenta.forca);

enormossauro.attack() //Enormosauro ataca

console.log(Chama.name);
console.log(Chama.health);
Chama.damage(enormossauro.forca); //Chama sofre o dano

const {name, health} = Chama;
console.log(name, health);

console.log(Chama.health); //Vida do Chama após sofrer o dano

Chama.damage(enormossauro.forca); //Enormosauro ataca

console.log(Chama.health); //Nova vida do Chama

const effective = true;

Chama.damage(enormossauro.forca, effective); //Enormosauro ataca

console.log(Chama.health); //Nova vida do Chama

Chama.damage(enormossauro.forca, effective); //Enormosauro ataca

console.log(Chama.health); //Nova vida do Chama

Chama.damage(enormossauro.forca, effective); //Enormosauro ataca

console.log(Chama.health); //Nova vida do Chama

