var express = require('express');
var router = express.Router();

var addMember = require('../mailchimp/addMember')
var ArticleModel = require('../models/article')
var CategoryModel = require('../models/categories')
var ContactModel = require('../models/contacts')


/* GET home page. */

//routes test

router.get('/articles', async function (req, res, next) {

  var allArticles = await ArticleModel.find()


  //article le plus récent
  var lastArticle = allArticles[allArticles.length - 1]

  var categoryID = lastArticle.categoryId

  var category = await CategoryModel.findById(categoryID)

  // var categoryName = category.categoryName

  var categoryName = {}

  //Note moyenne

  var sortedArticles = allArticles.sort(function (a, b) {
    return b.rating - a.rating
  })

  //5 articles avec la note la plus forte
  var fiveMostPopular = sortedArticles.slice(0, 4)


  //catégories à afficher



  res.json({ allArticles, lastArticle, fiveMostPopular, categoryName })
})

// router.put('/sub-category', async function(req, res, next){

//   var updatedSubcategory = await CategoryModel.findById("620bdf219b2dfa5d2269724e")



//   updatedSubcategory.subCategories[0].articles.push("621516ec7f5436257cea635f")

//   console.log(updatedSubcategory)

//   var savedSubcategory = await updatedSubcategory.save();
//   res.json({result: true, updatedSubcategory})
// })

router.put('/article', async function (req, res, next) {



  var newArticle = new ArticleModel({
    title: "Est-ce que je peux divorcer n'importe où ?",
    date_published: new Date(),
    content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    author: "Camille B.",
    image: "https://images.unsplash.com/photo-1582782657732-e7d7c08dcadd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
    alt: "Collier d'épingles cassé",
    subtitle: "Que faire si je veux divorcer à l'étranger ?",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80",
    rating: 4,
    ratingCount: 20,
    favorite: 25,
    categoryName: "droits",
    subCategoryName: "droit des personnes"
  })
  var articleSaved = await newArticle.save()

  res.json({ result: true, articleSaved })
})

router.get('/target-article/:id', async function (req, res, next) {

  var id = req.params.id;


  var articleFound = await ArticleModel.findById(id)

  console.log(articleFound)

  res.json({ result: true, articleFound })
})


router.put('/category', async function (req, res, next) {
  var newCategory = await CategoryModel.findOne({
    categoryName: "droits"
  })

  console.log(newCategory)

  newCategory.subCategories.push({ subCategory: "droit des personnes" })

  var categorySaved = await newCategory.save()

  res.json({ categorySaved })
})


router.get('/categories', async function (req, res, next) {
  var categories = await CategoryModel.find()


  res.json({ categories })
})

//Route pour l'affichage des articles par sous-catégorie

router.get("/category-articles/:id/:mainid", async function (req, res, next) {

  var subId = req.params.id
  var catId = req.params.mainid


  var matchingCat = await CategoryModel.findById(catId)
  var matchingSub = matchingCat.subCategories
  var matchingArticles = []
  for (var i = 0; i < matchingSub.length; i++) {
    if (matchingSub[i]._id == subId) {
      matchingArticles = matchingSub[i].articles
    }
  }



  var articlesToSend = [];
  for (var i = 0; i < matchingArticles.length; i++) {
    var article = await ArticleModel.findById(matchingArticles[i])
    articlesToSend.push(article)
  }

  console.log(articlesToSend)
  res.json({ articlesToSend })
})

router.post('/newsletter', async function (req, res, next) {

  const validateEmail = email => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regex.test(String(email).toLowerCase())
  }

  let message
  if (validateEmail(req.body.email)) {

    addMember(req.body.email)
    message = "Votre mail a bien été ajouté"
  }

  else {
    message = "Votre mail n'est pas valide"
  }


  res.json({ result: true, message })
})


router.post('/search', async function (req, res, next) {
  // console.log(req.body.search);
  var searchWord = req.body.search;
  var check = false
  var error
  if (!searchWord) {
error="Veuillez entrer un mot de recherche"
    res.json({check, error })
  }

  else {

    // var find = await ArticleModel.find({$or:[{title:searchWord}, {subtitle: searchWord}, {content:searchWord}]})

    var find = await ArticleModel.find();
var filtered = find.filter(function (el){
var title = el.title.split(" ");
var subtitle = el.subtitle.split(" ");
var content = el.content.split(" ")

var title1 = title.includes(searchWord);
var subtitle1 = subtitle.includes(searchWord);
var content1 = content.includes(searchWord)

  return title1 == true ||
  subtitle1 == true ||
  content1 == true
})


// console.log("filtered", filtered)

  if(filtered.length>0){
    
    check = true;

    res.json({check, filtered })
  } else {
error = "aucun résultat"

    res.json({check, error })
  }
  
  

  }

  
})


//route pour ajouter un commentaire

router.put('/add-comment', async function (req, res, next) {

  var comment = req.body.comment;
  var articleId = req.body.id;
  var pickDate = new Date().toLocaleDateString('fr-FR')
  var name = req.body.name
  var result
  var article = await ArticleModel.findById(articleId)
  var comments
 

  if(comment){

    var changeArticle = await ArticleModel.updateOne({id:articleId},
      {$push:{comments: {content : comment, date : pickDate, name : name}}})

    
    var comments = article.comments

result = true
  }



  res.json({ result, comments, newRating, newRatingCount })
})

//route pour modifier le nombre de favoris

router.put('/add-favorite', async function (req, res, next) {

  var compteur = req.body.count;
  var articleId = req.body.id;
  
  var article = await ArticleModel.findById(articleId)


    var changeArticle = await ArticleModel.updateOne({id:articleId},
      {favorite : compteur,
      })
var newFavorite = changeArticle.favorite;


console.log("favorite", newFavorite)


  res.json({ newFavorite })
})


module.exports = router;
