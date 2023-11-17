class Animal{
    constructor (name, weight) {
        this.name = name;
        this.weight = weight;
    }
}

class Dog extends Animal{
    constructor(name, weight, race){
        super(name, weight);
        this.race = race;
    }
}

const animal = new Animal("Spike", 15);

console.log(animal.name);

const dog = new Dog("Spike", 15, "Dobberman")

console.log(dog.race);
console.log(dog.name);
console.log(dog.weight);