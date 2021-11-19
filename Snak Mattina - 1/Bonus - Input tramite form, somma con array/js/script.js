// CONSEGNA

// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while (facoltativo)


// SOLUZIONE

// Variabile tasto submit e contenuto dell'input
const submitButton = document.querySelector('.submit_button');

// Creo un array vuoto che riempirò ad ogni numero inviato, 
// in modo da poterne fare la somma dopo usando i cicli come richiesto
// più un contatore per far si che ci siano massimo 5 click
const numbersList = [];

submitButton.addEventListener('click', function(){

    // Salvo l'input dell'utente convertito in numero in una variabile
    let currentNumber = parseInt(document.querySelector('.input_area').value);
    
    // Svuoto la input area all'invio del numero
    document.querySelector('.input_area').value = '';

    // Eseguo il tutto solo se è un numero valido
    if(!isNaN(currentNumber)){
        // Riempio l'array col numero inviato dall'utente se i numeri non sono già 5
        if(numbersList.length < 5){
            numbersList.push(currentNumber);
        }
        // Questi 2 if devo lasciarli separati oppure al 5 click non scatteranno entrambi
        if(numbersList.length === 5){

            // METODO COL FOR
            let forSum = 0;
            for(let i = 0; i < numbersList.length; i++){
                currentNumber = numbersList[i];
                forSum += currentNumber;
            }

            // METODO COL WHILE
            let whileSum = 0;
            let i = 0;
            while(i < numbersList.length){
                currentNumber = numbersList[i];
                whileSum += currentNumber;
                i++;
            }
            alert(`Metodo For: ${forSum} | Metodo While: ${whileSum}`);
        }
    } else {
        alert(`Per favore inserisci un numero valido`);
    }
});