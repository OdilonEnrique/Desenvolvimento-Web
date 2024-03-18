import express from "express";
import { router } from "../routes";
import { sqliteConnection } from "../database/sqlite3";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(router);

sqliteConnection()
  .then(() => {
    console.log("Database is connected...");
  })
  .catch((error) => {
    console.error(error);
  });