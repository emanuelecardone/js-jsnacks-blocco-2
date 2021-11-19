/*
 * Crea un array di numeri interi e fai la somma di tutti gli elementi
 * che sono in posizione dispari
 */

const numbersArray = [];

for(let i = 0; i < 5; i++){
    const currentNumber = Math.floor(Math.random() * 100) + 1;
    numbersArray.push(currentNumber);
}

let somma = 0;

for(let i = 0; i < numbersArray.length; i++){
    const currentNumber = numbersArray[i];

    if(i % 2 !== 0){
        somma += currentNumber;
    }
}
console.log(numbersArray);
console.log(somma);
alert(`La somma dei numeri dispari è: ${somma}`);