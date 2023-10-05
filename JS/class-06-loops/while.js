let n = 1;
while (n < 10) {
  if (n > 2 && n < 8) {
    n++;
    continue;
  }
  console.log(n);
  ++n;
}

while (n <= 500) {
  if (n % 2 === 0) {
    console.log(n);
  }
  ++n;
}

let count = 0;
let noia = 0;
while (noia <= 500) {
  console.log(noia);
  noia = count * 2;
  count++;
}

while (true) {
  let resp = prompt("Deseja encerrar?");
  if (resp) {
    alert("Obrigado pela sua visita!");
    break;
  }
}
