import express from "express";
import router from "./routes/index";
import dotenv from "dotenv";

const app = express();
const envResult = dotenv.config();
if (envResult.error) {
  throw envResult.error;
}

app.set("view engine", "hbs");

app.set("port", process.env.PORT || 3000);
app.use(express.urlencoded());
app.use(express.json());

app.use("/", router);

export default app;