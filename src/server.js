import express from "express";
import cors from "cors"
import usersRoutes from "./routes/users.routes.js"
import  moongoose from "./db.js"
import {PORT_API} from "./config.js"

const app=express();

app.use(cors());
app.use(express.json());

app.use(usersRoutes)

app.listen(PORT_API)
console.log(`Server is listening on port ${PORT_API}`)