import express, { Express } from "express";
import dotenv from "dotenv";
const envResult = dotenv.config();
if (envResult.error) {
  throw envResult.error;
}

import cors from "cors";
import helmet from "helmet";

import { sequelize } from './config.js'
import router from "./routes/index";
import fileRouter from "./routes/file"

const app: Express = express();

app.set("view engine", "hbs");

app.set("port", process.env.PORT || 3000);
app.use(express.urlencoded());
app.use(express.json());
app.use(helmet());
app.use(cors());

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

app.use("/", router);


export default app;