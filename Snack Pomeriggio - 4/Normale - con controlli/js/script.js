// CONSEGNA 

// Crea un array vuoto e chiedi all’utente un numero
// da inserire nell’array. Continua a chiedere i numeri
// all’utente e a inserirli nell’array fino a quando
// la somma degli elementi è minore di 50.
 

// SOLUZIONE

// Creo l'array vuoto
const numbersArray = [];
// Creo la variabile somma
let sum = 0;
// Creo la variabile per il numero che darà l'uscita dal while (mi serve per l'output)
let errorNumber;
// Variabile flag per l'output finale
let nullCheck = false;

// Chiedo i numeri all'utente finché la somma è minore di 50
while(sum < 50){
    // Chiedo il numero all'utente
    const currentNumber = prompt(`Inserisci un numero`);
    
    //Controllo se ricevo un input vuoto oppure se l'utente annulla
    if(!(currentNumber === '') && !(currentNumber === null)){
        // Aumento la somma prima di pushare nell'array così l'ultimo numero in input,
        // quello che farebbe superare la somma di 50, non verrà aggiunto.
        // Se l'utente digita 40, 9 e 10 aggiungo alla lista solo 40 e 9 
        // poiché quando digita 10 la somma supera 49 e quel 10 non va aggiunto all'array
        sum += parseInt(currentNumber);

        // Lo aggiungo all'array solo se la somma è ancora minore di 50 dopo l'ultimo incremento
        // Se la somma supera 50 registro l'ultimo numero come numero che fa chiudere il while
        if(sum < 50){
            numbersArray.push(parseInt(currentNumber));
        } else{
            errorNumber = parseInt(currentNumber);
        }
    } else if (currentNumber === ''){
        alert(`Per favore inserisci un numero valido`);
    } else{
        alert(`Hai annullato l'operazione`);
        nullCheck = true;
        break;
    }
}

// Output finale solo se l'utente non ha annullato
if(!nullCheck){
alert(`
Prima che la somma fosse >= 50, hai digitato questi numeri: ${numbersArray}

La somma era arrivata a ${sum - errorNumber}

Con l'ultimo numero che hai inserito (${errorNumber}) la somma è arrivata a: ${sum}
`);
}
