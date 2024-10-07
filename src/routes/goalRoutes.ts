// src/routes/goalRoutes.ts
import { Router } from "express";
import { getAllGoals } from "../controllers/goalController"; // Import the controller

const router = Router();

// Define the GET route to fetch all goals
router.get("/goals", getAllGoals);

export default router;