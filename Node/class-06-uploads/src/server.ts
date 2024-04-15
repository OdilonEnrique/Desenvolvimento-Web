import express from "express";
import { router } from "./routes";
import { appErrors } from "./errors/appErrors";
import { pageNotFoundError } from "./errors/pageNotFoundError";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.use(pageNotFoundError);
app.use(appErrors);

app.listen(port, () => {
  console.log(`Server is runnig on PORT ${port}...`);
});
