var mongoose = require("mongoose");

var subCategorySchema= mongoose.Schema({
subCategory: String,
articles : [{type: mongoose.Schema.Types.ObjectId, ref:'articles' }]
})

var categorySchema = mongoose.Schema({
    categoryName : String,
    subCategories: [subCategorySchema], 
    articles : [{type: mongoose.Schema.Types.ObjectId, ref:'articles' }]
})

var CategoryModel = mongoose.model("categories", categorySchema);

module.exports = CategoryModel;