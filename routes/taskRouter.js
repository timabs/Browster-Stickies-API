const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").delete(deleteTask).patch(updateTask);

module.exports = router;
