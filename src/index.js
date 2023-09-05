//library
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

//file
import initRoute from "./routes";
import connectionDatabase from "./config/connection/connection_database";

const main = () => {
  const app = express();
  const PORT = process.env.PORT || 8888;

  middleware(app);
  execute(app);
  run(app, PORT);
};

const run = (app, PORT) => {
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
};

const execute = (app) => {
  dotenv.config();
  initRoute(app);
  connectionDatabase();
};

const middleware = (app) => {
  app.use(
    cors({
      origin: process.env.CLIENT_URL,
      methods: ["GET", "POST", "PUT", "DELETE"],
    }),
  );
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    }),
  );
};

export default main;

