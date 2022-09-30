import arrayGenerator from "./arrayGenerator.js";



function insertionSort(tableau){

    for(let i = 1 ; i < tableau.length ; i++){
        const value = tableau[i]

        let j;

        for(j =  i - 1 ; j  >= 0 && tableau[j] > value ; j--){
  
            tableau[j + 1] = tableau[j]
        }

        tableau[j + 1] = value

 
    }

    return tableau
}









const resultat  = insertionSort(arrayGenerator(20,200))


console.log(resultat)