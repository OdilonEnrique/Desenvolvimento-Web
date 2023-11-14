const URL = "https://api.github.com/users/OdilonEnrique";

console.log("inicio");

const gitHubUser = fetch(URL)
.then((request) => request.json())
.then(({name, bio}) => 
    console.log({
        name: name, 
        bio: bio
    })
).catch((error) => console.log(error))
.finally(() => console.log("Fim da requisição"));

console.log(gitHubUser);

console.log("fim");