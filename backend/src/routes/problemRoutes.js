import { Router } from 'express';
import { addProblem, getProblems } from '../controllers/problemController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = Router();
router.use(protect);
router.route('/').post(addProblem).get(getProblems);
export default router;
