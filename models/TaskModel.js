const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, "Must provide name!"],
    trim: true,
  },
  category: {
    type: String,
    default: "",
  },
  userId: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("TaskModel", TaskSchema, "GeneralTasks");
