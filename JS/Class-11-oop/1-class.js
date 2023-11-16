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