import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {getTasks,getTask,createTask,updateTask,deleteTask} from "./models/taskModel.js";

const app= express();
app.use(cors());
app.use(express.json());

app.use((err,req,res,next)=>{
    console.error(err);
    res.status(500).send("Something broke");
});

app.get("/tasks",async (req,res)=>{
    const getAll= await getTasks();
    res.send(getAll);
});

app.get("/tasks/:id",async (req,res)=>{
    const id= Number(req.params.id);
    const getOne= await getTask(id);
    res.send(getOne);
});

app.post("/tasks",async (req,res) => {
    const {title,completed}= req.body;
    const create = await createTask(title,completed);
    res.send(create);
});

app.put("/tasks/:id",async (req,res)=>{
    const id= Number(req.params.id);
    const {title,completed}= req.body;
    const update = await updateTask(id,title,completed);
    res.send(update);
});

app.delete("/tasks/:id",async (req,res)=>{
    const id= Number(req.params.id);
    const delTask = await deleteTask(id);
    res.send(delTask);
});

dotenv.config();
const port= process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});
