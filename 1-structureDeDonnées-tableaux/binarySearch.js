


// proposition de copilot
let nbrOfTries = 0;

function binarySearchCopilote(){
    
        let array = new Array(100).fill().map((x, i) => i + 1);
    
        let low = 0;
    
        let high = array.length - 1;
    
        let mid = Math.floor((low + high) / 2);

        nbrOfTries++;
    
        let target = Math.floor(Math.random() * 100);
    
        while(array[mid] !== target && low <= high){
    
            if(target < array[mid]){
    
                high = mid - 1;
    
            }else{
    
                low = mid + 1;
    
            }
    
            mid = Math.floor((low + high) / 2);
    
        }
    
        if(array[mid] === target){
    
            return mid;
    
        }else{
    
            return -1;
    
        }
    
}



const resultDeCopilote = binarySearchCopilote();
const nbrOfTriesDeCopilote = nbrOfTries;





console.log('result pour copilote : ', resultDeCopilote);
console.log( 'nombre de tentative pour copilote', nbrOfTriesDeCopilote);




// ma proposition

const tableau = new Array(100).fill().map(( x , i) => i + 1);
const numberGuess = Math.floor(Math.random() * 100);



let nbrOfTriesforMe = 0;

function binarySearch(tableau, numberGuess) {
    let min = 0;
    let max = tableau.length - 1;


    while (min <= max) {
        let mid = Math.floor((min + max) / 2);

        nbrOfTriesforMe++;

        if (tableau[mid] === numberGuess) {

            return mid;

        } else if (tableau[mid] < numberGuess) {

            min = mid + 1;

        } else {

            
            max = mid - 1;
        }
    }
    return -1;
}



const resultForMe = binarySearch(tableau, numberGuess);

console.log("le resultat pour moi ", resultForMe);
console.log("nombre de tentative pour mon code", nbrOfTriesforMe);












    











 








