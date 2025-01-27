import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (request, reponse) => {
  reponse.send("This is the root route!");
});
app.listen(8080, () => {
  console.log("server running on port 8080");
});
dotenv.config();
app.get("/images", async (req, res) => {
  const API = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&query=puppy`;
  const response = await fetch(API);
  const imageData = await response.json();

  res.json(imageData.results);
});
