export default function (searchList = [], action){

    if(action.type == "search"){
       var searchListCopy = [...searchList];
       searchListCopy.push(action.results)
       
        return searchListCopy
    } else {
        return searchList
    }
}