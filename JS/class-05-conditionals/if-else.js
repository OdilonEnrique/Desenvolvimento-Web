const userAge = 16;

if (userAge >= 18 && userAge <=70) {
    console.log("Voto obrigatório");
}
else if(userAge<18 || userAge>=16 || userAge>70){
    console.log("Voto facultativo");
}
else{
    console.log("Não pode votar");
}

if (userAge >= 16) {
    if(userAge < 18 || userAge >70){
        console.log("Voto facultativo");
    }
    else{
        console.log("obrigatório");
    }
}
else{
    console.log("Não pode votar");
}

if (userAge >= 16 && userAge < 18 || userAge > 70) {
    console.log("Facultativo");
} else if (userAge >18 && userAge <= 70) {
    console.log("obr4igatorio");
} else {
    console.log("Não pode votar");
}

