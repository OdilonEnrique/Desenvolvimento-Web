function deleteElementArray(nameElement, array) {
    const index = array.indexOf(nameElement);
    console.log(index);
    index != -1 ? array.splice(index, 1): "";
    return  array;
}

const techs = ["HTML", 10, "CSS", 20, "JS", 30,];

console.log(deleteElementArray("JS", techs));
console.log(deleteElementArray(30, techs));
console.log(deleteElementArray("HTML", techs));
console.log(deleteElementArray("XHTML", techs));
console.log(deleteElementArray("CSS", techs));
console.log(deleteElementArray("JS", techs)); 