<<<<<<< HEAD
import db from "./config/db.js";

export async function getTasks() {
  const [rows] = await db.query("SELECT * FROM tasks");
  return rows;
}

export async function getTask(id) {
  const [row] = await db.query(
    `
    SELECT * FROM tasks
    WHERE id = ?`,
    [id]
  );
  return row;
}

export async function createTask(title, completed) {
  const [create] = await db.query(
    `
    INSERT INTO tasks(title,completed)
    VALUES(?,?)`,
    [title, completed]
  );
  return getTask(create.insertId);
}

export async function updateTask(id, title, completed) {
  const [update] = await db.query(
    `
    UPDATE tasks
    SET title=?,completed=?
    WHERE id=?`,
    [title, completed, id]
  );
  return getTask(id);
}

export async function deleteTask(id) {
  const [deleteTask] = await db.query(
    `
    DELETE FROM tasks
    WHERE id = ?`,
    [id]
  );

  const [updateId] = await db.query(
    `
    ALTER TABLE tasks AUTO_INCREMENT = 1;
    `
  );
  return getTask(id);
}

// const result= await getTask(1);
=======
import db from "./config/db.js";

export async function getTasks() {
  const [rows] = await db.query("SELECT * FROM tasks");
  return rows;
}

export async function getTask(id) {
  const [row] = await db.query(
    `
    SELECT * FROM tasks
    WHERE id = ?`,
    [id]
  );
  return row;
}

export async function createTask(title, completed) {
  const [create] = await db.query(
    `
    INSERT INTO tasks(title,completed)
    VALUES(?,?)`,
    [title, completed]
  );
  return getTask(create.insertId);
}

export async function updateTask(id, title, completed) {
  const [update] = await db.query(
    `
    UPDATE tasks
    SET title=?,completed=?
    WHERE id=?`,
    [title, completed, id]
  );
  return getTask(id);
}

export async function deleteTask(id) {
  const [deleteTask] = await db.query(
    `
    DELETE FROM tasks
    WHERE id = ?`,
    [id]
  );

  const [updateId] = await db.query(
    `
    ALTER TABLE tasks AUTO_INCREMENT = 1;
    `
  );
  return getTask(id);
}

// const result= await getTask(1);
>>>>>>> f1ea9143b0b6eda64ff87e8b7b2704192c6b5400
// console.log(result);