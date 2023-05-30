import { Router } from "express";
import {getUsers} from "../controllers/user.routes.js"

const router = Router();

router.get("/api/tasks", getUsers);



export default router;
