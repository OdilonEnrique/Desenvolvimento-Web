import { SubmitHandler, useForm } from "react-hook-form";
import "./App.css";

type Input = {
  name: string;
  email: string;
};

export function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch, ////Assista, visualiza toda a parte sendo digitada no input
    setError,
    reset,
  } = useForm<Input>();
  const onSubmit: SubmitHandler<Input> = (data) => {
    if (data.name == "Pedrinho") {
      setError("name", {
        type: "manual",
        message: `O nome ${data.name} é escroto`,
      });
      return;
    }
    console.log(data);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Class 07 Forms</h1>
        <section>
          <label>
            Nome:
            <input
              type="text"
              {...register("name", {
                required: "Campo Obrigatório",
                minLength: { value: 3, message: "Mínimo de 3 caracteres" },
              })}
            />
          </label>
          <span className="error">{errors.name?.message}</span>
        </section>

        <section>
          <label>
            Email:
            <input
              type="email"
              {...register("email", {
                required: "Campo Obrigatório",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/i,
                  message: "Email inválido",
                },
              })}
            />
            <span className="error">{errors.email?.message}</span>
          </label>
        </section>

        <button> Cadastrar </button>
      </form>
    </>
  );
}
