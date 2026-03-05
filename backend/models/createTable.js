import db from "./config/db.js";

export default async function createTable(params) {
  const [create] = await db.query(`
    create table if not exists tasks(
    id int primary key auto_increment,
    title varchar(255),
    completed bool default false,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
`);
}