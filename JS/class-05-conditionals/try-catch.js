function runApplication() {
  return "Runnning...";
}

try {
  document.write(runApplication());
} catch (error) {
  console.error(error);
} finally {
  console.log("Sempre será executado");
}

document.write("Apication is running...");

function dividir(num1, num2) {
  if (num2 == 0) {
    throw new Error("Não pd dividir por zero abestado!!!!");
  }
  return num1 / num2;
}

console.log(dividir(6, 0));
