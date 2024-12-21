import express from "express";
import pg from "pg";
import axios from "axios";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(cors());

const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
  ssl: {
    rejectUnauthorized: false, // Allow self-signed certificates
  },
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to the PostgreSQL database.");
});

app.post("/api/notes", async (req, res) => {
  const { id, title, content } = req.body;
  console.log("Received body:", req.body); // To debug and check the key names

  // Trim spaces if necessary
  const trimmedId = id.trim();
  const trimmedTitle = title.trim();
  const trimmedContent = content.trim();

  try {
    if (!trimmedId || !trimmedTitle || !trimmedContent) {
      return res
        .status(400)
        .send("All fields (id, title, content) are required");
    }

    const result = await db.query(
      "INSERT INTO notes (id, title, content) VALUES ($1, $2, $3) RETURNING *",
      [trimmedId, trimmedTitle, trimmedContent]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/api/notes", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM notes ");
    res.json(result.rows);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

app.delete("/api/notes/:id", async (req, res) => {
  const { id } = req.params; // Get the note ID from the URL parameters

  try {
    const result = await db.query("DELETE FROM notes WHERE id = $1", [id]);

    if (result.rowCount > 0) {
      res.status(200).send("Note deleted successfully");
    } else {
      res.status(404).send("Note not found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.listen("3000", () => {
  console.log("runnin on local host");
});
