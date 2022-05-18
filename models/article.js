var mongoose = require("mongoose");

var commentSchema = mongoose.Schema({
    name : String,
    content: String,
    dateComment : Date,

})

var articleSchema = mongoose.Schema({
    title : String,
    date_published : Date,
    content : String,
    author : String,
    image : String,
    alt : String,
    subtitle: String,
    readingTime : String,
    avatar : String,
    rating : Number,
    ratingCount : Number,
    favorite : Number,
    comments:[commentSchema],
    categoryName : String,
    subCategoryName : String
    
})

var ArticleModel = mongoose.model("articles", articleSchema);

module.exports = ArticleModel;