import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { router } from "./routes/apiRouter.js";
import cors from "cors";

dotenv.config();

const app = express();

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in .env");
}

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());
app.use(cors());

app.use("/api", router);

app.listen(3000, () => console.log("Server Started"));
