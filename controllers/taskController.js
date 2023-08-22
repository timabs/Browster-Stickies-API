const Taskbase = require("../models/TaskModel");

const getAllTasks = async (req, res) => {
  try {
    const userId = req.userId;
    const myTasks = await Taskbase.find({ userId });
    res.status(200).json({ myTasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const userId = req.userId;
    const taskData = { ...req.body, userId };
    const newTask = await Taskbase.create(taskData);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const taskToDelete = await Taskbase.findOneAndDelete({ _id: taskID });
    if (!taskToDelete) {
      return res.status(404).json({ msg: `No task with Id: ${taskID}` });
    } else {
      res.status(200).json({ taskToDelete });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;

    const existingTask = await Taskbase.findOneAndUpdate(
      { _id: taskID },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!existingTask) {
      return res.status(404).json({ msg: `No task with Id: ${taskID}` });
    }

    res.status(200).json({ existingTask });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  deleteTask,
  updateTask,
};
