


// algorithme simple search 




// creation du tableau de 100 
const tableau = new Array(100).fill().map((x, i) =>  i + 1 );
// génération de façon aléatoire de chiffre entre 1 et 100
const numberToGuess = Math.floor(Math.random() * 100);

// création de la fonction 


console.log('numberToGuess', numberToGuess);

let nbrOFtries = 0;

function simpleSearch(tableau, numberToGuess){

nbrOFtries++

    for(let i = 0 ; i < tableau.length;i++){
        
     if( tableau[i]=== numberToGuess ){
        return i 
     }
    }
}  





const resultat = simpleSearch(tableau, numberToGuess)


console.log('resultat ', resultat )
console.log('nbrOFtries ', resultat )


















