import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import contactHandler from "./api/contact-form.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/contact-form", contactHandler);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`vercel-backend dev server listening on http://localhost:${port}`);
});
