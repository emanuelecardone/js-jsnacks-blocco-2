// CONSEGNA

// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo.


// SOLUZIONE
// Variabile del numero inserito 
let userNumber;
do{
    // Ricevo l'input dall'utente
    userNumber = prompt(`Inserisci un numero`);

    // Output solo se è un numero valido e l'utente non ha annullato
    if(!(userNumber === '') && !(userNumber === null)){

        // Variabile per stringa convertita in numero
        const userRealNumber = parseInt(userNumber);
        
        // Stampo il numero se è pari altrimenti stampo il numero + 1
        if(userRealNumber % 2 === 0){
            document.querySelector('body').innerHTML = `
            <h2 class="text-dark text-center mt-5">${userRealNumber} è pari, quindi stampo ${userRealNumber}</h2>
            `
        }
        else{
            document.querySelector('body').innerHTML = `
            <h2 class="text-dark text-center mt-5">${userRealNumber} è dispari, quindi stampo ${userRealNumber + 1}</h2>
            `
        }
    } else if(userNumber === ''){
        alert(`Per favore inserisci un numero valido`);
    } else{
        alert(`Hai annullato l'operazione`);
    }      
} while(userNumber === '') 


    


 