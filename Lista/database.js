import * as SQLite from "expo-sqlite";

let db;

export async function initDB() {
  db = await SQLite.openDatabaseAsync("contatos.db");

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS contatos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      numero TEXT
    );
  `);

  return db;
}

export async function addContato(nome, numero) {
  return await db.runAsync(
    "INSERT INTO contatos (nome, numero) VALUES (?, ?)",
    [nome, numero]
  );
}

export async function listarContatos() {
  return await db.getAllAsync("SELECT * FROM contatos");
}

export async function deleteContato(id) {
  return await db.runAsync("DELETE FROM contatos WHERE id = ?", [id]);
}
