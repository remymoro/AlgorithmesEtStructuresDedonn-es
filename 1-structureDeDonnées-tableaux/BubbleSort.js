import arrayGenerator from "./arrayGenerator";


function bubbleSort(tableau){

    let n = tableau.length;


    for(let i = n - 1 ; i > 0 ; i--){
        let tableauTri√© = true;


        for(let j = 0 ; j < i ; j++){
            if(tableau[j] > tableau[ j + 1 ]){

                const tmp = tableau[j]

                tableau[j] = tableau[j + 1]

                tableau[j + 1] = tmp;
                
                tableauTri√© = false
            }
        }

        if(tableauTri√©){
            break;
        }

    }
    return tableau

}



const resultat = bubbleSort(arrayGenerator(20 ,200 ))


console.log(resultat)

