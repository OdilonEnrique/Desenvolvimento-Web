for (let count = 0; count < 10; count++) {
  if (count > 2 && count < 8) {
    break;
  }
  console.log(count);
}


const myArray = ["A", 2, [], () => {}];
const arrayBID = [
    ["A", "B", "C"],
    [1, 2, 3],
    [9, 8, 7]
];
console.log(arrayBID[0][1]);

for(let i = 0; i< myArray.length; i++){
    console.log(myArray[i]); 
}

for(let i = 0; i< arrayBID.length; i++){
    for(let j = 0; j< arrayBID.length; j++){
        console.log(arrayBID[i]);
        console.log(arrayBID[j]);
        console.log(arrayBID[i][j]);
    }
}

for(const i of myArray){
    console.log(i);
}

for(const i of arrayBID){
    for(const j of i){
        console.log(i);
        console.log(j);
    }
}

for(const i in myArray){
    // console.log(i);         
    console.log(myArray[i]);
}