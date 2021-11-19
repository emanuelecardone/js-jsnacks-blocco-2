/*
 * Crea un array vuoto e chiedi all’utente un numero
 * da inserire nell’array. Continua a chiedere i numeri
 * all’utente e a inserirli nell’array fino a quando
 * a somma degli elementi è minore di 50.
 */

const numbersArray = [];
let somma = 0;
while(somma < 50){
    const currentNumber = parseInt(prompt(`Dammi un numero`));

    if(!isNaN(currentNumber)){
        numbersArray.push(currentNumber);
        somma += currentNumber;
    } else{
        alert(`Non hai inserito alcun numero`);
    }
}

console.log(numbersArray);
console.log(somma);