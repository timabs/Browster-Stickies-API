const mongoose = require("mongoose");
const Categorybase = require("../models/CategoryModel");

const getAllCategories = async (req, res) => {
  try {
    const userId = req.userId;
    const categories = await Categorybase.find({ userId });
    res.status(200).json({ categories });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createCategory = async (req, res) => {
  try {
    const userId = req.userId;
    const categoryData = { ...req.body, userId };
    const newCategory = await Categorybase.create(categoryData);
    res.status(201).json({ data: newCategory });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const updateCategory = async (req, res) => {
  try {
    const { id: categoryID } = req.params;

    const existingCategory = await Categorybase.findOneAndUpdate(
      { _id: categoryID },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!existingCategory) {
      return res.status(404).json({ msg: `No task with Id: ${taskID}` });
    }

    res.status(200).json({ existingCategory });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id: categoryID } = req.params;
    const categoryToDelete = await Categorybase.findOneAndDelete({
      _id: categoryID,
    });
    if (!categoryToDelete) {
      return res
        .status(404)
        .json({ msg: `No category with ID: ${categoryID}` });
    } else {
      res.status(200).json({ categoryToDelete });
    }
  } catch (error) {}
};

// async function deleteCollection(collectionName) {
//   try {
// Delete the collection using the drop method
//     await Category.collection.drop();
//     console.log(`Collection '${collectionName}' deleted successfully.`);
//   } catch (error) {
//     console.error(`Error deleting collection '${collectionName}':`, error);
//   }
// }

// Call the function to delete a collection by its name
// deleteCollection('myCollection'); // Replace 'myCollection' with the actual collection name

module.exports = {
  getAllCategories,
  createCategory,
  deleteCategory,
  updateCategory,
};
