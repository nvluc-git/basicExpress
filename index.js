import express from "express";
import cors from "cors";
import initRoute from "./src/routes";
require("dotenv").config();
require("./connection_database");
const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"], // => read, create, update, delete
  })
);

// read data and convert to Json
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//routes
initRoute(app);

//about server
const PORT = process.env.PORT || 8888;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
