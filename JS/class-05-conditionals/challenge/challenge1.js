const media = prompt("Digite sua nota");

const calc = (mediaParam) => {
  if (typeof mediaParam === "string") {
    mediaParam = Number(mediaParam.replace(",", "."));
  }
  if (mediaParam <= 100 && mediaParam >= 90) {
    alert("Você foi aprovado, está no grupo A");
  } else if (mediaParam < 90 && mediaParam >= 80) {
    alert("Você foi aprovado, está no grupo B");
  } else if (mediaParam < 80 && mediaParam >= 70) {
    alert("Você foi aprovado, está no grupo C");
  } else if (mediaParam < 70 && mediaParam >= 60) {
    alert("Você foi reprovado, está no grupo D");
  } else if (mediaParam < 60 && mediaParam >= 0) {
    alert("Você foi reprovado, está no grupo F");
  } else {
    alert("Número digitado não é aceito no sistema ABCDF");
  }
};

calc(media);
