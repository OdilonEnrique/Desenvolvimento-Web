// const myTitle = document.querySelector("h1"); // element
// const myContainer = document.querySelector(".container");

// console.log(myTitle);
// console.log(myTitle.textContent);
// console.log(myTitle.innerHTML);

// console.log(myContainer);
// console.log(myContainer.textContent);
// console.log(myContainer.innerHTML);

// myTitle.innerText = "Document Object Model"
// myTitle.innerText = "<i> Odilon </i>" // Não reconhece o html
// myTitle.innerHTML = "<i>HTML</i>" // Reconhece o html

// myTitle.style.color = "#f00"
// myTitle.style.color = "orange"
// myTitle.style.backgroundColor = "lightgray"

// const boxNodeList = document.querySelectorAll(".box")
// console.log(boxNodeList);
// console.log(boxNodeList.forEach((value) => console.log(value)));

// console.log(boxNodeList.forEach((node) => {
//     node.style.color = "blue"
// }));
// // const boxNodeList1 = document.querySelector(".box")
// // console.log(boxNodeList);

// // const boxNodeList2 = document.getElementsByClassName(".box") Mais antigo

// Calculadora

const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const sumButton = document.querySelector(".sumButton");
const result = document.querySelector(".result");

function sumNumber() { 
    result.innerHTML = Number(num1.value) + Number(num2.value);
}

sumButton.addEventListener("click", sumNumber);
sumButton.addEventListener("keyup", () => {
    console.log(num1.value);
});