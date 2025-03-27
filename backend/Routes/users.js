import express from "express";
import { createUsers, deleteUser, getUsers, updateUser } from "../Controllers/users.js";

const router = express.Router()

router.get("/", getUsers)
router.post("/", createUsers)
router.put("/usuarios/:id", updateUser)
router.delete("/usuarios/:id", deleteUser)

export default router