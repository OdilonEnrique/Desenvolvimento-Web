const myArray = ["A", 1, () => "a"];

console.log(myArray);

function callback(func) {
  return func();
}

console.log(callback(() => "retorno"));
console.log(myArray[0]);
console.log(myArray[2]());
console.log(myArray.join("_"));

const techs = ["HTML", "CSS", "GIT", "PHP"];

techs.push("JavaScript"); // Usado para adicionar
techs.push("Só acredito veno!");

techs.pop(); // Usado para remover

console.log(techs);

const removeItem = techs.pop();

console.log(removeItem + " Item removido com sucesso");

console.log(techs);

techs.shift();

console.log(techs);

const removePrimaryItem = techs.shift();

console.log(removePrimaryItem + " Item removido com sucesso");

techs.unshift("React");

console.log(techs);

const addStart = techs.unshift("SQL");

console.log(addStart + " Item adicionado com sucesso no array" + techs);

console.log(techs);

console.log(techs.includes("SQL"));
console.log(techs.includes("Javascript"));

console.log(techs.indexOf("GIT"));

console.log(techs.keys());

console.log(techs.slice(1, 4));
console.log(techs.slice(-1));

console.log(techs.slice(-3, -1));

console.log(techs.concat(techs));

// console.log(deleteArrayElement("PHP", techs));

console.log(techs.splice(1, 4));
console.log(techs.splice(-1));
