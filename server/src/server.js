import express from "express";
import authrout from "./module/auth.routs.js";
import cors from "cors"
const app=express();
app.use(cors({
    origin:"http://localhost:5173"
}))
app.use(express.json())

app.use("/api",authrout)


app.listen(4000,()=>{
    console.log("http://localhost:4000")
})