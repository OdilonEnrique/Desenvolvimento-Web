import { hash } from "bcrypt";
import { sqliteConnection } from "../database/sqlite3";
import { randomUUID } from "node:crypto";
import { Request, Response, NextFunction } from "express";

type UserData = {
  name: string;
  email: string;
  password: string;
};

type UserDataUpdate = {
  id: string;
  name: string;
  email: string;
  newPassword: string;
};
export const userRepository = {
  async create({ name, email, password }: UserData) {
    const uuid = randomUUID();

    const db = await sqliteConnection();
    const passwordHash = await hash(password, 10);
    await db.run(
      "INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)",
      [uuid, name, email, passwordHash]
    );
    return { status: 201, uuid: uuid };
  },

  async getById(id: string) {
    const db = await sqliteConnection();
    const user = await db.get("SELECT * FROM USERS WHERE id = ?", [id]);

    return user;
  },

  async getByEmail(email: string) {
    const db = await sqliteConnection();
    const user = await db.get("SELECT * FROM USERS WHERE email = ?", [email]);

    return user;
  },

  async update({ id, name, email, newPassword }: UserDataUpdate) {
    const db = await sqliteConnection();
    const updateQuery = `
        UPDATE users 
        SET name = ?, email = ?, password = ?, updated_at = DATETIME('now')
        WHERE id = ?
      `;

    const passwordHash = await hash(newPassword, 10);
    await db.run(updateQuery, [name, email, passwordHash, id]);
    return { status: 200, message: "user updated!" };
  },
  async delete(id: string) {
    const db = await sqliteConnection();

    await db.run("DELETE FROM users WHERE id = ?", [id]);

    return { id, status: 200, message: "user deleted" };
  },
};
