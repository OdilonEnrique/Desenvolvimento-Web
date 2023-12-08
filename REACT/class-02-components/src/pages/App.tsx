import { CardProfile } from "../components/CardProfile";

function calcAge(birth: string) {
  const dateNow = new Date().getTime();
  const dateBirth = new Date(birth).getTime();
  const userAge = dateNow - dateBirth;
  return Math.floor(userAge / (1000 * 60 * 60 * 24 * 365.25));
}



const dataAPI = [
  {id:1, name: "Odilon", birth: "01-17-2006"},  
  {id:2, name: "Eliza", birth: "06-10-2010"},
  {id:3, name: "Ana", birth: "03-27-2001"},
]

console.log(calcAge(dataAPI[0].birth));

export function App() {
  return (
    <>
      <h1>Class 02 Components</h1>

      {
        dataAPI.map(({id, name, birth}) => {
          return <CardProfile key={id} name={name} birth={birth} calcAge={calcAge}/>
        })
      }
    </>
  );
}
