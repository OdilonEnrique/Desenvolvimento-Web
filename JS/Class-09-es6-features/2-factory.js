//  Factory (Creational Design Pattern)

function person(name, age) {
    return {
        name, 
        age: age,
        canDrive: age >=18, 
        status: () => {
            if (age >= 18) {
                return "Pode dirigir"
            } else {
                return "Não pode dirigir"
            }
        }
    }
}

console.log(person("Odilon", 17));
console.log(person("JP", 18));
console.log(person("Neemias", 17).status());
console.log(person("Neemias", 21).status());
console.log(typeof person("Odilon", 17));

console.log(this); // Se refere ao escopo