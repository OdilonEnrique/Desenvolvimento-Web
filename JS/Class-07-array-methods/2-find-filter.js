const studants = [
  { id: 1, name: "João", average: 6, birth: 2005 },
  { id: 2, name: "Thiago", average: 6, birth: 2002 },
  { id: 3, name: "Jonas", average: 5, birth: 1998 },
  { id: 4, name: "Rosa", average: 9, birth: 2004 },
  { id: 5, name: "Amanda", average: 8, birth: 1992 },
  { id: 6, name: "Pedro", average: 7, birth: 1998 },
  { id: 7, name: "Pedro", average: 7, birth: 2000 },
  { id: 7, name: "Nathan", average: 7, birth: 2006 },
  { id: 7, name: "Dudu", average: 7, birth: 2007 },
];

console.log(
  studants.find((value) => {
    return value.id === 6 || value.id === 5;
  })
);

console.log(
  studants.find((value) => {
    return value.name === "Jonas" && value.name === "Rosa";
  })
);

console.log(
  studants.find((value) => {
    return value.name === "Pedro" && value.birth > 1998;
  })
);

console.log(
  studants.find((value) => {
    return (
      value.name.toLowerCase() === "peDrO".toLowerCase() && value.birth > 1998
    );
  })
);

console.log(studants.find((value) => value.average >= 7));

// Immutable

console.log(studants.filter((value) => value.average >= 7));

const year = new Date().getFullYear();

console.log(year);

console.log(studants.filter((value) => year - value.birth < 18));

console.log(studants.filter(value => value.name.includes("a")));
