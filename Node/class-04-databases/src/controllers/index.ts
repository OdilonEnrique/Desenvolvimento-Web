import { Request, Response, NextFunction } from "express";
import { sqliteConnection } from "../database/sqlite3";
import { randomUUID } from "node:crypto";
import { hash, compare } from "bcrypt";

export const userControllers = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, password } = req.body;

      const uuid = randomUUID();

      const db = await sqliteConnection();
      const passwordHash = await hash(password, 10);
      await db.run(
        "INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)",
        [uuid, name, email, passwordHash]
      );
      return res.status(201).json({ message: "user created! ", id: uuid });
    } catch (error) {
      return next(error);
    }
  },

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { password } = req.body;
      const db = await sqliteConnection();

      if (!password) {
        throw res
          .status(400)
          .json({ message: `please confirm your password!` });
      }

      const user = await db.get("SELECT * FROM USERS WHERE id = ?", [id]);

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

  update(req: Request, res: Response) {
    res.send({ message: "updated!" });
  },

  delete(req: Request, res: Response) {
    res.send({ message: "deleted!" });
  },
};
