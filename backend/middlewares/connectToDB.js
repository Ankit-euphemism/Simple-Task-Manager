import createTable from "../models/createTable.js";
export default async function connectToDB(req,res,next){
    try {
        await createTable();
        next();
    } catch (error) {
        console.error("Error connecting to the database:", error);
        res.status(500).json({ error: "Failed to connect to the database" });
    }
}