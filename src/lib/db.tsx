import sqlite3 from "sqlite3";
import path from "path";

const dbPath = path.resolve(process.cwd(), "survey.db");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) console.error("Erro ao abrir banco:", err);
  else console.log("SQLite conectado:", dbPath);
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS respondents (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS answers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      respondent_id INTEGER,
      question TEXT NOT NULL,
      answer TEXT NOT NULL,
      FOREIGN KEY (respondent_id) REFERENCES respondents(id)
    )
  `);
});

export default db;
