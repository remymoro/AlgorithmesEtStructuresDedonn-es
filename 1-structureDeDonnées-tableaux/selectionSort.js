
import arrayGenerator from './arrayGenerator.js';






function selectionSort(tableau){
    let n =  tableau.length;


    for(let i  = 0 ; i < n - 1 ; i++){
        let minIndex = i;


        for(let j = i + 1 ; j < n ; j++){

            if(tableau[minIndex] < tableau[i]){
                minIndex = j 
            }


        }


        if(minIndex != i ){
       
            let tmp = tableau[i]
            tableau[i] = tableau[minIndex]
            tableau[minIndex] = tmp
        }
 
    }




    return tableau;

}
















const resultat = selectionSort(arrayGenerator(20,200))

console.log(resultat)