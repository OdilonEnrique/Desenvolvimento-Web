const media = Number(prompt("Digite sua nota"));

const calc = (media) => {
  if (media <= 100  && media >= 90) {
    alert("Você foi aprovado, está no grupo A");
  } else if (media <= 89 && media >= 80) {
    alert("Você foi aprovado, está no grupo B");
  } else if (media <= 79 && media >= 70) {
    alert("Você foi aprovado, está no grupo C");
  } else if (media <= 69 && media >= 60) {
    alert("Você foi reprovado, está no grupo D");
  } else if (media < 60 && media >= 0) {
    alert("Você foi reprovado, está no grupo F");
  } else {
    alert("Número digitado não é aceito no sistema ABCDF");
  }
};

calc(media);
