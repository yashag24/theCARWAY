import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import Routes from "./routes/route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json({ limit: "10mb" }));
app.use(cors());

// Resolve directory name (ESM compatible)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected to MongoDB: ${process.env.MONGO_URL}`))
  .catch((err) => console.log("NOT CONNECTED TO NETWORK", err));

  app.use("/", Routes);
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
  });
  
  
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
