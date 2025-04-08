import Task from '../models/taskModel.js';
import mongoose from 'mongoose';

// GET TASKS

export async function getTasks(req, resp) {
  try {
    const tasks = await Task.find({});
    resp.status(200).json({ success: true, data: tasks })
  } catch(error) {
    resp.status(500).json({ success: false, message: 'Server Error'});
  }
}

// CREATE TASK

export async function createTask(req, resp) {

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
}

// EDIT TASK

export async function editTask(req, resp) {
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
}

// DELETE TASK

export async function deleteTask(req, resp) {
  const { id } = req.params;

  try {
    await Task.findByIdAndDelete(id);
    return resp.status(200).json({ success: true, message: 'Task has been deleted'});
  } catch(error) {
    return resp.status(400).json({ success: false, message: 'Task not found'});
  }
}