// Object

let namesStudent = "Emanuel";
let age = 30;
let profission = "Desenvolvimento-Web \nData Analyst";

console.log(profission);

// [].map(() => {}); único código obrgado utilizar ponto e vírgula

let pokemon = {
  name: "Blastoise",
  level: 30,
  type: "Water",
  attack: () => "Pound",
  special: () => "hyderrpoun",
};

console.log(pokemon);
console.log(typeof pokemon);
console.log(pokemon.name);
console.log(pokemon.level);
console.log(pokemon["type"]);
console.log(pokemon.attack());
console.log(pokemon.special());

// Array (Vetor)

let pokedex = [
    {name :"Charmander", level: 6}, 
    {name :"Bulbassour", level: 5}, 
    {name :"Squirtle", level: 4},
];

console.log(pokedex);
console.log(typeof pokedex);
console.log(pokedex[0]);
console.log(pokedex[2]);
console.log(pokedex[2][0]);
console.log(pokedex[1].name);
console.log(pokedex[1].level);
console.log(pokedex[0].name);
console.log(pokedex[0].level);
