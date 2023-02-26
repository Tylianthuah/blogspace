import express from "express";
const router = express.Router();
import { register, login, logout } from "../controllers/auth.js";

router.get("/register", login);
router.get("/login", login);
router.get("/logout", logout);

export default router;