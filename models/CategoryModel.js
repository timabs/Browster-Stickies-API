const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide name!"],
    trim: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("CategoryModel", CategorySchema, "Categories");

// function createCategoryModel(categoryName) {
//     const schema = new mongoose.Schema({
//       content: String,
//     }, {
//         collection: categoryName
//     });

// Define the model using the specified category name and the schema
//     return mongoose.model(categoryName, schema);
//   }
