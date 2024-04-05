import { Request, Response, NextFunction } from "express";
import { z } from "zod";

export const userControllers = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const userSchema = z
        .object({
          name: z
            .string({
              required_error: "Nome obrigatório",
              invalid_type_error: "Para o nome use somente texto",
            })
            .min(3, { message: "Nome com mínimo de 3 caracteres" })
            .max(255, { message: "Tamanho máximo atingido para o nome" }),

          email: z
            .string({
              required_error: "Email obrigatório",
              invalid_type_error: "Somente texto",
            })
            .email({ message: "email inválido" })
            .max(255, { message: "Tamanho máximo atingido para o email" }),

          password: z
            .string({
              required_error: "Senha obrigatório",
              invalid_type_error: "Para a senha use o tipo textual!",
            })
            .min(7, { message: "Senha com o mínimo de 7 caracteres" })
            .max(255, { message: "Tamanho máximo atingido para a senha" })
            .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,}$/, {
              message:
                "Senha fraca: deve conter pelo menos pelo menos uma letra minúscula, uma letra maiúscula e um dígito.",
            }),
        })
        .strict();

      const { name, email, password } = userSchema.parse(req.body);

      console.log(name, email, password);

      return res.status(201).json({ message: "User created!" });
    } catch (error) {
      return next(error);
    }
  },

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      return res.status(200).json({ message: "User read!" });
    } catch (error) {
      return next(error);
    }
  },
};
