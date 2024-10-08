import { Request, Response } from 'express';

// Dummy data for now (replace with actual database logic)
const goals = [{ id: 1, title: 'Learn TypeScript' }, { id: 2, title: 'Build a MERN app' }];

export const getAllGoals = (req: Request, res: Response) => {
  res.status(200).json(goals);
};

export const createGoal = (req: Request, res: Response) => {
  const newGoal = { id: Date.now(), title: req.body.title };
  goals.push(newGoal);
  res.status(201).json(newGoal);
};

export const updateGoal = (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedGoal = { ...goals.find(goal => goal.id == Number(id)), ...req.body };
  res.status(200).json(updatedGoal);
};

export const deleteGoal = (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({ message: `Goal with id ${id} deleted` });
};
