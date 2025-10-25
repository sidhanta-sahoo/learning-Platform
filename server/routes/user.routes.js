import express from "express";
import { register, login, logout, getMe } from "../controllers/user.controller.js";

const router = express.Router();

// Auth routes
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

// Get logged-in user
router.get("/me", getMe);

export default router;
