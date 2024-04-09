import { sqliteConnnection } from "../database/sqlite3";
import { randomUUID } from "node:crypto";
import { hash } from "bcrypt";

type CreateUser = {
  name: string;
  email: string;
  password: string;
};

export const userRepository = {
  async create({ name, email, password }: CreateUser) {
    const db = await sqliteConnnection();
    const userUUID = randomUUID();
    const passwordHash = await hash(password, 10);

    await db.run(
      "INSERT INTO users (id, name, email, password) VALUES (?,?,?,?);",
      [userUUID, name, email, passwordHash]
    );

    return { status: 201, id: userUUID };
  },

  async getByID(id: string) {
    const db = await sqliteConnnection();
    return db.get("SELECT * FROM users WHERE id = ?", [id]);
  },

  async getByEmail(email: string) {
    const db = await sqliteConnnection();
    return db.get("SELECT * FROM users WHERE email = ?", [email]);
  },
};
