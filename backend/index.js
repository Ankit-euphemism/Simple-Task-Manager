import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {getTasks,getTask,createTask,updateTask,deleteTask} from "./models/taskModel.js";
import createTb from "./middlewares/createTb.js";

const app= express();

app.use(cors());
app.use(express.json());
app.use(createTb);

const parseTaskId = (rawId) => {
        const id = Number(rawId);
        if (!Number.isInteger(id) || id <= 0) {
                return null;
        }
        return id;
};

app.get("/tasks",async (req,res,next)=>{
    try {
    const getAll= await getTasks();
    res.send(getAll);
    } catch (error) {
        next(error);
    }
});

app.get("/tasks/:id",async (req,res,next)=>{
        const id = parseTaskId(req.params.id);
        if (id === null) {
                return res.status(400).json({ message: "Invalid task id" });
        }

    try {
    const getOne= await getTask(id);
    res.send(getOne);
    } catch (error) {
        next(error);
    }
});

app.post("/tasks",async (req,res,next) => {
    try {
    const {title,completed}= req.body;
    const create = await createTask(title,completed);
    res.send(create);
    } catch (error) {
        next(error);
    }
});

app.put("/tasks/:id",async (req,res,next)=>{
        const id = parseTaskId(req.params.id);
        if (id === null) {
                return res.status(400).json({ message: "Invalid task id" });
        }

    try {
    const {title,completed}= req.body;
    const update = await updateTask(id,title,completed);
    res.send(update);
    } catch (error) {
        next(error);
    }
});

app.delete("/tasks/:id",async (req,res,next)=>{
        const id = parseTaskId(req.params.id);
        if (id === null) {
                return res.status(400).json({ message: "Invalid task id" });
        }

    try {
    const delTask = await deleteTask(id);
    res.send(delTask);
    } catch (error) {
        next(error);
    }
});

app.use((err,req,res,next)=>{
        console.error(err);
        res.status(500).send("Something broke");
});

dotenv.config();
const port= process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});
