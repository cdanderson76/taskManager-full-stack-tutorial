import { Router } from 'express';
import getTasks from '../controllers/taskControllers';

export const router = Router();

router.get('/get', getTasks);