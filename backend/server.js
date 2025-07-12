import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/hotels.js";

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

app.use("/hotels", router);

app.listen(3000, () => console.log("Server Started"));
