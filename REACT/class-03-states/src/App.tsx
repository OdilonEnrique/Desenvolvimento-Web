import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { UserCard } from "./components/UserCard";

type UserData = {
  name: string;
  avatar_url: string;
  bio: string;
};

export function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("OdilonEnrique");
  const [auxName, setAuxName] = useState("");
  const [data, setData] = useState<UserData>({} as UserData);

  function addCount() {
    // Closures
    setCount((prevState) => prevState + 1);
    // setCount((prevState) => prevState + 1);
  }

  function handleChangeName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setAuxName(name);
  }

  useEffect(() => {
    // hook
    fetch(`https://api.github.com/users/${name}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [auxName]);

  console.log(data);

  return (
    <>
      <h1>Class 03 States</h1>
      <p>Name: {name}</p>
      <p>Count: {count}</p>
      <button onClick={addCount}>Add&gt;</button>

      <form
        onSubmit={handleSubmit}
        style={{ textAlign: "center", marginTop: 24 }}
      >
        <input type="text" onChange={handleChangeName} />
        <button>Pesquisar</button>
      </form>

      {data && (
        <UserCard name={data.name} avatar_url={data.avatar_url} bio={data.bio} />
      )}
    </>
  );
}
