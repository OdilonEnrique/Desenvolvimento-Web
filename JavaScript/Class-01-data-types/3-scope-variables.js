let num = "Global";
const pi = 3.14;

console.log(num);
console.log(pi);
{
    let num = "Local";
    const pi = 5;

    num = "New Value";
    console.log(num);
    console.log(pi);
}

console.log(num);
console.log(pi);