import createTable from "../models/createTable.js";

export default async function createTb(req,res,next) {
    try {
        await createTable();
        next();
    } catch (error) {
        next(error);
    }
}