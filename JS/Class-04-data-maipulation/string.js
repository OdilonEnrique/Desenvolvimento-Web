let myName = "Odilon";

console.log(myName.__proto__);
console.log(myName.length);
console.log(myName[1]);
console.log((myName[1] = "D")); //String Imutable
console.log((myName = "outra coisa"));
console.log(myName.toLocaleLowerCase());
console.log(myName.toLocaleUpperCase());

console.log();

let phrase = "    In a web developer web web";
let phrase2 = ["In", "a", "web", "developer"];

phrase2[2] = "WEB";
console.log(phrase2);

console.log(phrase.split(" "));
console.log(phrase.split(""));
console.log((phrase.split("")[2] = "WEB"));
console.log(phrase.split("").reverse().join(""));
console.log(phrase.replace("web", "WEB"));
console.log(phrase.replaceAll("web", "WEB"));

console.log(phrase.indexOf("I"));
console.log(phrase.indexOf("w"));

console.log(phrase);
console.log(phrase.trim());
console.log(phrase.substring(5));
console.log(phrase.includes("web"));
console.log(phrase.includes("Web"));
console.log("web" == "web");
console.log("web" == "Web"); //Case sensitive

console.log(phrase.toLocaleLowerCase().includes("web"));
console.log(
  phrase.toLocaleLowerCase().includes("Web")
    ? "Teste verdadeiro"
    : "Teste falso"
);

const consoles = {
  log: () => {
    return "imprimir";
  },
  error: () => {
    return "imprimir error";
  },
};

consoles.log("test");
consoles.error();
console.error();
