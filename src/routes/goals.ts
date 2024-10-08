import { Router } from 'express';
import { getAllGoals, createGoal, updateGoal, deleteGoal } from '../controllers/goals';

const router = Router();

// Route definitions
router.get('/', getAllGoals);
router.post('/', createGoal);
router.put('/:id', updateGoal);
router.delete('/:id', deleteGoal);

export default router;