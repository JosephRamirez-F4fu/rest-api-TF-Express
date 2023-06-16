import { Router } from "express";
import {getUsers,delUser,postUser,postUserPassEmail,putUser,getUser} from "../controllers/user.routes.js"

const router = Router();

router.get("/api/users", getUsers);
router.delete("/api/user/:id",delUser);
router.post("/api/user",postUser);
router.post("/api/user/login",postUserPassEmail);
router.put("/api/user/:id",putUser);
router.get("/api/user/:id",getUser);

export default router;
