let metro = Number(prompt("Digite a velocidade em metros por segundos"));

let calc = (num1) => {
  const result = num1 * 3.6;
  return result;
};

const converted = calc(metro);
document.write(converted + "km/h");

