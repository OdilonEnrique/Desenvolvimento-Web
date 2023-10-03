let dateNow = new Date();
let date1 = new Date("2023-12-1 12:03:24");
let date2 = new Date("2023-12-3 12:03:24");

console.log(dateNow);
console.log(date1);
console.log((date2 - date1) / 1000 / 60 / 60 / 24); // cálculo em milissegundos entre dois dias diferentes sendo transformados em segundos, minutos, horas e dias respectivamente
console.log(0.25 * 24);

console.log(dateNow.getDay()); // dia da semana em um array de 0 a 6
console.log(dateNow.getDate());

console.log(dateNow.getDay() + 1);
console.log(dateNow.getDate() + 6);
console.log(dateNow.getMonth()); // Um array de meses de 0 a 11
console.log(dateNow.getFullYear()); // Pega o ano sem ser array

console.log(dateNow.setDate(dateNow.getDate() + 30));
console.log(dateNow.setMonth(dateNow.getMonth() + 5));
console.log(dateNow.setFullYear(dateNow.getFullYear()));

console.log(dateNow.getHours());
console.log(dateNow.getMinutes());
console.log(dateNow.getSeconds());
console.log(dateNow.getMilliseconds());

console.log(dateNow.setHours(dateNow.getHours() + 12));

let day = String(dateNow.getDate()).padStart(2, "0");
let month = String(dateNow.getMonth()).padStart(2, "0");
let year = dateNow.getFullYear();

let day1 = String(dateNow.getDate()).padStart(2, "0");
let month2 = String(dateNow.getMonth()).padStart(2, "0");
let year3 = dateNow.getFullYear();

console.log(`${day}/${month}/${year}`);

console.log(
  dateNow.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
);
