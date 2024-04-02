import { Request, Response, NextFunction } from "express";
import { sqliteConnection } from "../database/sqlite3";
import { hash, compare } from "bcrypt";
import { userRepository } from "../repositories/userRepository";

export const userControllers = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, password } = req.body;

      const userEmail = await userRepository.getByEmail(email);
      if (userEmail)
        throw res.status(404).json({ message: "user already email" });

      const userCreated = await userRepository.create({
        name,
        email,
        password,
      });

      return res
        .status(201)
        .json({ message: "user created! ", ...userCreated });
    } catch (error) {
      return next(error);
    }
  },

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { password } = req.body;

      if (!password) {
        throw res
          .status(400)
          .json({ message: `please confirm your password!` });
      }

      const user = await userRepository.getById(id);

      if (!user) throw res.status(400).json({ message: `User not found!` });

      const passwordCheck = await compare(password, user.password);

      if (!passwordCheck) {
        throw res.status(401).json({ message: "invalid password" });
      }

      const { name, email } = user;

      return res.status(200).json({ name, email });
    } catch (error) {
      return next(error);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { name, email, password, newPassword } = req.body;

      const user = await userRepository.getById(id);

      if (!user) throw res.status(400).json({ message: "user not found" });

      const userEmail = await userRepository.getByEmail(email);

      if (userEmail && userEmail.id != id)
        throw res.status(404).json({ message: "user already email" });

      const passwordCheck = await compare(password, user.password);

      if (!passwordCheck) {
        throw res.status(401).json({ message: "invalid password" });
      }

      const userUpdated = await userRepository.update({
        id,
        name,
        email,
        newPassword,
      });

      return res.status(200).json(userUpdated);
    } catch (error) {
      return next(error);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { password } = req.body;

      const user = await userRepository.getById(id);

      if (!user) throw res.status(400).json({ message: "user not found" });

      const passwordCheck = await compare(password, user.password);

      if (!passwordCheck) {
        throw res.status(401).json({ message: "invalid password" });
      }

      const userDeleted = await userRepository.delete(id);
      return res.status(200).json(userDeleted);
    } catch (error) {
      return next(error);
    }
  },
};
