import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/mongo.config.js";
import shortUrlRoutes from "./src/routes/shorturl.route.js";
dotenv.config("./.env");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Api Rooutes
app.use("/api/shorturl", shortUrlRoutes);

app.get("/", (_, res) => {
  res.send("Server is running....");
});

app.listen(8080, () => {
  connectDB();
  console.log("Server is running on port http://localhost:8080/");
});
