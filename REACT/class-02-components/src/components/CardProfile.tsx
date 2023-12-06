type CardProps = {
    name: string;
    age: number;
}

export function CardProfile( {name, age }: CardProps) {
  return (
    <>
      <strong>{name}</strong>
      <p>Idade: {age}</p>
    </>
  );
}