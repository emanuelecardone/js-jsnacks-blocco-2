// CONSEGNA

// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while (facoltativo)


// SOLUZIONE

// METODO COL FOR
let forSum = 0;
for(let i = 0; i < 5; i++){
    const currentNumber = parseInt(prompt(`Dammi un numero`));
    forSum += currentNumber;    
}
alert(`Somma For: ${forSum}`);


// METODO COL WHILE
let whileSum = 0;
let i = 0;
while(i < 5){
    const currentNumber = parseInt(prompt(`Dammi un numero`));
    whileSum += currentNumber;
    i++       
}
alert(`Somma While: ${whileSum}`);
