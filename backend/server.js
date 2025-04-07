import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Task from './models/taskModel.js';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get('/api/tasks', async (req, resp) => {
  try {
    const tasks = await Task.find({});
    resp.status(200).json({ success: true, data: tasks })
  } catch(error) {
    resp.status(500).json({ success: false, message: 'Server Error'});
  }
});


app.post('/api/tasks', async (req, resp) => {

  const task = req.body;

  if(!task.name) {
    return resp.status(400).json({ succeed: false, message: 'Please provide a name'})
  }

  const newTask = new Task(task);

  try {
    newTask.save();
    return resp.status(201).json({ succeed: true, data: newTask });
  } catch(error) {
    console.error(`Error creating task: ${error.message}`);
    return resp.status(500).json({ succeed: false, message: 'Server error...'});
  }
});


app.put('/api/tasks/:id', async (req, resp) => {
  const { id } = req.params;

  const task = req.body;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return resp.status(404).json({ success: true, message: 'Invalid task ID' });
  };

  try {
    const updatedTask = await Task.findByIdAndUpdate(id, task, { new: true })
    resp.status(200).json({ success: true, data: updatedTask });
  } catch(error) {
    resp.status(500).json({ success: false, message: 'Server Error'});
  }
});


app.delete('/api/tasks/:id', async (req, resp) => {
  const { id } = req.params;

  try {
    await Task.findByIdAndDelete(id);
    return resp.status(200).json({ success: true, message: 'Task has been deleted'});
  } catch(error) {
    return resp.status(400).json({ success: false, message: 'Task not found'});
  }
});


app.listen(5000, () => {
  connectDB();
  console.log(`Server started at http://localhost:${PORT}`);
});