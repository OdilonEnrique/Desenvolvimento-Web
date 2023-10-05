let temperatura =
  prompt(`Digite o valor da temperatura mais sua letra representante da sua temperatura(Ex: 50K)

    C-Celsius
    F-Fahrenheit
    K-Kelvin
`);

let temperaturaA = temperatura.toUpperCase().replaceAll(" ", "");
let quantidade = temperaturaA.length;
let simbolo = temperaturaA.substring(quantidade - 1, quantidade);
let numero = Number(temperaturaA.replace(simbolo, ""));

try {
  switch (simbolo) {
    case "F":
      if (-459.67 <= numero) {
        let calcC = ((numero - 32) * 5) / 9;
        let calcK = calcC + 273;
        console.log(numero);
        console.log(calcC);
        console.log(calcK);
        document.write(temperaturaA + " = " + calcC + "C  = " + calcK + "K");
      } else {
        alert("O valor digitado não pertence a esta escala");
        throw new Error("O valor digitado não pertence a esta escala");
      }
      break;

    case "C":
      if (numero >= -273.15) {
        let calcF = (numero * 9) / 5 + 32;
        let calcKelvin = numero + 273;
        console.log(numero);
        console.log(calcF);
        console.log(calcKelvin);
        document.write(
          temperaturaA + " = " + calcF + "F  = " + calcKelvin + "K"
        );
      } else {
        alert("O valor digitado não pertence a esta escala");
        throw new Error("O valor digitado não pertence a esta escala");
      }

      break;

    case "K":
      if (0 <= numero) {
        let calcCelsius = numero - 273;
        let calcFarenheit = ((calcCelsius - 32) * 5) / 9;
        console.log(numero);
        console.log(calcCelsius);
        console.log(calcFarenheit);
        document.write(
          temperaturaA + " = " + calcFarenheit + "F  = " + calcCelsius + "C"
        );
      } else {
        alert("O valor digitado não pertence a esta escala");
        throw new Error("O valor digitado não pertence a esta escala");
      }
      break;

    default:
      alert("O formato foi escrito de forma incorreta");
      break;
  }
} catch (error) {
  console.log(error);
}
