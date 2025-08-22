<<<<<<< HEAD
import mysql from "mysql2"
import dotenv from "dotenv"
dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST||"localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}).promise();

db.connect((err)=>{
    if(err) console.log(err);
    console.log("MySQL connect...");
});

=======
import mysql from "mysql2"
import dotenv from "dotenv"
dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST||"localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}).promise();

db.connect((err)=>{
    if(err) console.log(err);
    console.log("MySQL connect...");
});

>>>>>>> f1ea9143b0b6eda64ff87e8b7b2704192c6b5400
export default db;