// CONSEGNA

// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo.


// SOLUZIONE

// Variabile per il numero inserito
const userNumber = parseInt(prompt(`Dammi un numero`));
// Se è pari stampa il numero, se è dispari stampa il numero +1
if(userNumber % 2 === 0){
    alert(userNumber);
} else{
    alert(userNumber + 1);
}