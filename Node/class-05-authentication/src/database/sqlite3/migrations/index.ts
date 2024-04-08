import { sqliteConnnection } from "..";
import { tableUsers } from "./tableUsers";

export async function runMigrations() {
  const schemas = [tableUsers].join("");

  sqliteConnnection()
    .then((db) => db.exec(schemas))
    .catch((error) => console.error(error));
}
