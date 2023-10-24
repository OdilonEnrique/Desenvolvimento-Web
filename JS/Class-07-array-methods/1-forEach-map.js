const array = ["Matrix", "It", "ET", "Jumanji", "Barbie"];

// array.forEach((value, index, array) => {
//   console.log({value, index, array});
// });

// array.map((value, index, array) => {
//   console.log({ value, index, array });
// });

// let arrayForEach = array.forEach((value, index, array) => {
  // array[index] = "A"
//   return { value, index, array };
// });

// console.log(arrayForEach);

// Immutable

// const arrayMap = array.map((value, index, array) => {
//   return { value, index, array };
// });

// console.log(array);
// console.log(arrayMap);

// const dollar = [10, 20, 30, 40, 50];

// const realConverted = dollar.map((value) => {
//   return value * 5.05;
// });

// const realConverted1 = dollar.map((value) => value * 5.05);

// console.log(dollar);
// console.log(realConverted);
// console.log(realConverted1);

const rectangles = [
  { width: 4, height: 5 },
  { width: 7, height: 10 },
  { width: 14, height: 7 },
];

const calculateAreas = rectangles.map((value, index) => {
  return {
    name: `Retângulo ${index + 1}`,
    area: value.width * value.height,
  };
});

console.table(calculateAreas);
document.write(JSON.stringify(calculateAreas))
