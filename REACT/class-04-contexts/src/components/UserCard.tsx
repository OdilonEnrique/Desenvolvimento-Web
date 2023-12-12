import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export function UserCard() {
  const { name } = useContext(UserContext);
  return (
    <>
      <h2>{name}</h2>
      <p>Web Developer</p>
    </>
  );
}
