// CONSEGNA 

// Crea un array vuoto e chiedi all’utente un numero
// da inserire nell’array. Continua a chiedere i numeri
// all’utente e a inserirli nell’array fino a quando
// la somma degli elementi è minore di 50.
 

// SOLUZIONE

// Seleziono la row e la popolo con le cols
const mainRow = document.querySelector('.row');
const leftCol = `
<div class="col">
    <div class="list_wrapper h-100 d-flex flex-column justify-content-center align-items-center">
        <h2>Lista dei numeri che inserisci</h2>
        <div class="numbers_wrapper w-100 h-50 d-flex justify-content-center align-items-center border border-5 border-dark">
        
        </div>
    </div>
</div>
`;
const middleCol = `
<div class="col">
    <div class="form_wrapper d-flex flex-column justify-content-center align-items-center">
        <label class="fs-5 fw-bolder" for="number_form">Inserisci un numero</label>
        <input type="number" class="form-number mt-2 mb-3 number_input" id="number_form">
        <button type="submit" class="btn btn-dark send_button">Invia</button>
    </div>
</div>
`;
const rightCol = `
<div class="col">
    <div class="result_wrapper h-100 d-flex flex-column justify-content-center align-items-center">
        <h2>Risultato finale</h2>
        <div class="result_box w-100 h-50 d-flex justify-content-center align-items-center border border-5 border-dark p-2"></div>
    </div>
</div>
`;
mainRow.innerHTML = leftCol + middleCol + rightCol;

// Creo l'array vuoto
const numbersArray = [];
// Creo la variabile somma
let sum = 0;
// Creo la variabile per il numero che darà l'uscita dall'operazione (mi serve per l'output)
let errorNumber;
// Creo la variabile per il pulsante che invia i numeri
const sendButton = document.querySelector('.send_button');
// Creo la variabile per l'input
const numberInput = document.querySelector('.number_input');

// Genero l'evento al click del pulsante
sendButton.addEventListener('click', function(){

    // Variabile per il numero dell'utente
    const currentNumber = parseInt(numberInput.value);

    // Controllo che sia un numero effettivo
    if(!isNaN(currentNumber) && sum < 50){
        // Aumento la somma prima di pushare nell'array così l'ultimo numero in input,
        // quello che farebbe superare la somma di 50, non verrà aggiunto.
        // Se l'utente digita 40, 9 e 10 aggiungo alla lista solo 40 e 9 
        // poiché quando digita 10 la somma supera 49 e quel 10 non va aggiunto all'array
        sum += currentNumber;

        // Lo aggiungo all'array e alla lista in pagina solo se la somma è ancora minore di 50 dopo l'ultimo incremento
        // Se la somma supera 50 registro l'ultimo numero come numero che fa chiudere l'operazione
        if(sum < 50){
            numbersArray.push(currentNumber);
            document.querySelector('.numbers_wrapper').innerHTML += `<span class="fw-bold">${currentNumber}</span>`;
        } else if (sum >= 50){
            // Registro il valore del numero che mi fa uscire dall'operazione
            errorNumber = currentNumber;
            // Do il messaggio finale di output
            document.querySelector('.result_box').innerHTML = `
            <span class="fs-6">
            Hai digitato: <span class="fw-bolder">${numbersArray}</span>. La somma era arrivata a <span class="fw-bolder">${sum - errorNumber}</span>.<br>
            Digitando <span class="fw-bolder">${errorNumber}</span>, la somma è arrivata a: <span class="fw-bolder">${sum}</span>.
            </span>
            `;
        } 
    } else if (isNaN(currentNumber) && sum < 50){
        alert(`Per favore inserisci un numero valido`);
    } else{
        alert(`La somma ha già superato 50, non puoi più inserire numeri`);
    }

    // Svuoto l'area di input ad ogni click
    numberInput.value = ``;
});

