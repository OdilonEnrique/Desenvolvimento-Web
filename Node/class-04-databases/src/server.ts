import express from "express";
import { router } from "./routes";
import { sqliteConnection } from "./database/sqlite3";
import { runMigritions } from "./database/sqlite3/migrations";
import { appErrors } from "./middlewares/appErrors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(router);
app.use(appErrors);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

sqliteConnection()
  .then(() => {
    console.log("Database is connected...");
  })
  .catch((error) => {
    console.error(error);
  });

runMigritions();
