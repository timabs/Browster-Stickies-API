const express = require("express");
const router = express.Router();
const {
  getAllCategories,
  createCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/categoryController");

router.route("/").get(getAllCategories).post(createCategory);
router.route("/:id").delete(deleteCategory).patch(updateCategory);
// .post(createTask);
// router.route('/:id').delete(deleteTask);

module.exports = router;
