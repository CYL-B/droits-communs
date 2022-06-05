export default function (compteur = 0, action){

    if(action.type == "add"){
       var newCompteur = compteur + 1
       
        return newCompteur
    } else if(action.type == "remove"){
        var newCompteur = compteur - 1
        return newCompteur
    } else {
        return compteur
    }
}