export default function (articleList = [], action){

    if(action.type == "storeArticles"){
        console.log(articleList)
        return action.articles
    } else {
        return articleList
    }
}