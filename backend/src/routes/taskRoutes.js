import { Router } from 'express';
import { getTasks, initRoadmap, updateTask } from '../controllers/taskController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = Router();
router.use(protect);
router.post('/init', initRoadmap);
router.get('/', getTasks);
router.patch('/:id', updateTask);
export default router;
