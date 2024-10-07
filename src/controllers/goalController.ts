// src/controllers/goalController.ts
import { Request, Response } from "express";
import { GoalModel } from "../models/goalModel"; // Import the model

// Controller function to get all goals
export const getAllGoals = async (req: Request, res: Response) => {
    try {
        const goals = await GoalModel.find();
        res.json(goals);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch goals", error });
    }
};