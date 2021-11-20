// CONSEGNA

// Crea un array di numeri interi e fai la somma di tutti gli elementi
// che sono in posizione dispari
 

// SOLUZIONE

// Creo le variabili per il main e i suoi contenuti
const mainWrapper = document.querySelector('main');
const mainTitle = `
<h1 class="text-light text-uppercase text-center">Verrà stampata la somma dei numeri che inserisci con posizione dispari<br>
    <span class="fs-4">Puoi inserire un massimo di 10 numeri</span>
</h1>`;
const formArea = `
<div class="form_wrapper w-25 h-25 bg-light p-5 d-flex flex-column justify-content-center align-items-start rounded-pill">
    <label for="number_form" class="form-label text-primary">Inserisci qui un numero</label>
    <input type="number" class="form-control mb-3 number_input" id="number_form">
    <button type="submit" class="btn btn-primary form_button">Invia</button>
</div>
`;
const listArea = `
<div class="list_wrapper w-50 h_15 bg-light d-flex justify-content-around align-items-center rounded">
    <div class="container-fluid">
        <div class="row row-cols-10">

        </div>
    </div>
</div>
`;
const finalResult = `
<h2 class="text-light text-uppercase sum_result"></h2>
`;
mainWrapper.innerHTML = mainTitle + formArea + listArea + finalResult;

// Creo la variabile per il pulsante che farà partire il tutto
const numbersButton = document.querySelector('.form_button');
// Creo l'array di numeri inizialmente vuoto
const numbersArray = [];
// Variabile per la somma
let sum = 0;
// Variabile per il contatore degli indici
let counter = 1;

// Creo l'evento al click
numbersButton.addEventListener('click', function(){
    
    // Variabile per l'input
    const numbersInput = document.querySelector('.number_input');
    // Ricevo in input i numeri dall'utente, per sicurezza li arrotondo per difetto così da averli interi
    const currentNumber = Math.floor(parseInt(numbersInput.value)) + 0;

    // Faccio riempire la lista con un massimo di 10 numeri, dopo stampo la somma con l'else
    // Se il numero è NaN non eseguo nulla
    if(numbersArray.length < 10 && !isNaN(currentNumber)){
        
        // Variabile per la row della lista in pagina
        const numbersListRow = document.querySelector('.row-cols-10');

        // Inserisco il numero sia nell'array che nella lista in pagina
        numbersArray.push(currentNumber);
        numbersListRow.innerHTML += `
        <div class="col">
            <div class="numbers_wrapper d-flex justify-content-around align-items-center">
                <span class="text-primary text-center fs-3 fw-bold">
                    <span class="fs-5 fw-normal">[${counter}]</span><br>${currentNumber}
                </span>
            </div>
        </div>
        `;
        // Se il counter è dispari aumento la somma
        if(counter % 2 !== 0){
            sum += currentNumber;
        }
        // Aumento il counter di 1
        counter++;

        // Quando la length dell'array raggiunge 10, prima di uscire da questo if stampo la somma in pagina
        if(numbersArray.length === 10){
            document.querySelector('.sum_result').innerHTML = `La somma è ${sum}`;
        }
    } else if (numbersArray.length < 10 && isNaN(currentNumber)){
        alert(`Per favore inserisci un numero valido`)
    } else{
        alert(`Hai già inserito 10 numeri`)
    }

    // Svuoto l'area di input ad ogni click di invio
    numbersInput.value = '';
    
});
