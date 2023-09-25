function average() {
  console.log("test");
}

average();

function calc(grade1, grade2) {
  const result = (grade1 + grade2) / 2;
  document.write(`${result} <br>`);
}

calc(3, 7);
calc(8, 9);
calc(6, 7);
calc(3, 2);

const add = function (num1, num2) {
  return num1 + num2;
};

console.log(add(2, 3));

const mult = (num1, num2) => {
    return num1 * num2
}

console.log(mult(2,3));

console.log(Math.pow(2, 3));