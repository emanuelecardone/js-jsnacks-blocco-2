// CONSEGNA

// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo.


// SOLUZIONE

// Variabile del numero inserito
const userNumber = prompt(`Inserisci un numero`);

// Output solo se è un numero valido e l'utente non ha annullato
if(!(userNumber === '') && !(userNumber === null)){

    // Variabile per stringa convertita in numero
    const userRealNumber = parseInt(userNumber);
    // Stampo il numero se è pari altrimenti stampo il numero + 1
    if(userRealNumber % 2 === 0){
        alert(userRealNumber);
    }
    else{
        alert(userRealNumber + 1);
    }
} else if(userNumber === ''){
    alert(`Non hai inserito un numero valido`);
} else{
    alert(`Hai annullato l'operazione`);
}       