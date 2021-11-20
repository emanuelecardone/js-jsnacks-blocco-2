// CONSEGNA

// Crea un array di numeri interi e fai la somma di tutti gli elementi
// che sono in posizione dispari
 

// SOLUZIONE

// Creo l'array di numeri inizialmente vuoto
const numbersArray = [];
// Variabile per la somma
let sum = 0;

for(let i = 0; i < 10; i++){
    // Creo dei numeri da 1 a 100 e li pusho nell'array
    const currentNumber = Math.floor(Math.random() * 100) + 1;
    numbersArray.push(currentNumber);

    // Se l'indice i è dispari, lo sarà anche il corrispondente dell'array
    // Quindi effettuo il controllo indice dispari già da ora
    if(!(i % 2 === 0)){
        sum += currentNumber;
    }
}

alert(`
Si è generato questo array: ${(numbersArray)}
Questa è la somma dei numeri con posizione dispari: ${sum}
`);