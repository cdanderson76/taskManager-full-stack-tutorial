import express from 'express';
import { createTask, deleteTask, editTask, getTasks } from '../controllers/taskController.js';


const router = express.Router();

router.get('/', getTasks);
router.post('/', createTask);
router.put('/:id', editTask);
router.delete('/:id', deleteTask);


export default router;