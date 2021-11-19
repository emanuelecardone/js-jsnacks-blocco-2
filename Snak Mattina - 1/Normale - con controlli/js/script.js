// CONSEGNA

// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while (facoltativo)


// SOLUZIONE

// METODO COL FOR
let forSum = 0;
for(let i = 0; i < 5; i++){
    const currentNumber = prompt(`Dimmi un numero (somma con il for)`);
    if(!(currentNumber === '') && !(currentNumber === null)){
        forSum += parseInt(currentNumber);
    } else if(currentNumber === ''){
        alert(`Per favore inserisci un numero valido`);
        i--;
    } else{
        alert('Hai annullato l\'operazione');
        break;
    }
    // Output solo se ho 5 numeri inseriti così da evitarlo all'annulla dell'utente
    if(i === 4){
        alert(`Somma For: ${forSum}`);
    }
}



// METODO COL WHILE
let whileSum = 0;
let i = 0;
while(i < 5){
    const currentNumber = prompt(`Dimmi un numero (somma con il while)`);
    if(!(currentNumber === '') && !(currentNumber === null)){
        whileSum += parseInt(currentNumber);
    } else if(currentNumber === ''){
        alert(`Per favore inserisci un numero valido`);
        i--;
    } else{
        alert('Hai annullato l\'operazione');
        break;
    }
    // Output solo se ho 5 numeri inseriti così da evitarlo all'annulla dell'utente
    if(i === 4){
        alert(`Somma While: ${whileSum}`);
    }
    i++;
}