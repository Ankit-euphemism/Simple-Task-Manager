import mysql from "mysql2"
import dotenv from "dotenv"
import { readFileSync } from "fs";
dotenv.config();

const databaseName = process.env.DB_NAME || process.env.DB_DATABASE || "taskManager";

const sslConfig = process.env.DB_SSL_CA
  ? {
      rejectUnauthorized: false,
      ca: readFileSync(process.env.DB_SSL_CA),
    }
  : undefined;

const db = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: databaseName,
  ssl: sslConfig,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}).promise();

db.getConnection()
    .then((connection) => {
        console.log(`Connected to AWS RDS MySQL database: ${databaseName}`);
        connection.release();
    })
    .catch((err) => {
        console.error(`MySQL connection failed for database '${databaseName}':`, err.message);
    });

export default db;
