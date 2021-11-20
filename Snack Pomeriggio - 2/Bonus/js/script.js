// CONSEGNA

// Generatore di “nomi cognomi” casuali: prendendo
// una lista di nomi e una lista di cognomi,
// Gatsby vuole generare una falsa lista di invitati.


// SOLUZIONE

// Creo gli array di nomi e cognomi e la lista vuota che riempirò dopo
const firstNames = ['Emanuele', 'Matteo', 'Francesca', 'Daniela', 'Maria', 'Giovanni', 'Valerio', 'Alex', 'Franco', 'Miriam'];
const lastNames = ['Battisti', 'Innocenzi', 'Manfrinetti', 'Kourtis', 'Zecchiaroli', 'Pandolfi', 'Mermolia', 'Savastano', 'Sergi','Cardone'];
const fakeList = [];

// Seleziono le rows e il main
const leftHeaderRow = document.querySelector('.left_row');
const rightHeaderRow = document.querySelector('.right_row');
const mainWrapper = document.querySelector('main');

// Popolo la lista e le rows dell'header
for(let i = 0; i < firstNames.length; i++){

    // Seleziono un nome e un cognome random
    const firstNameForList = firstNames[Math.floor(Math.random() * firstNames.length - 1 + 1) + 0];
    const lastNameForList = lastNames[Math.floor(Math.random() * lastNames.length - 1 + 1) + 0];
    // Li aggiungo alla lista
    fakeList.push(firstNameForList + ' ' +lastNameForList);

    // Popolo le rows
    leftHeaderRow.innerHTML += `
    <div class="col">
        <div class="w-100 h_100p d-flex justify-content-center align-items-center">
            <h6 class="mb-0 text-white">${firstNames[i]}</h2>
        </div>
    </div>
    `;
    rightHeaderRow.innerHTML += `
    <div class="col">
        <div class="w-100 h_100p d-flex justify-content-center align-items-center">
            <h6 class="mb-0 text-white">${lastNames[i]}</h2>
        </div>
    </div>
    `;
}

// Inserisco il pulsante per la comparsa dello slider nel DOM, poi gli creo una variabile
mainWrapper.innerHTML = `<button type="button" class="show_button btn btn-success p-5 fs-2 fw-bold">Mostra lista</button>`;  
const showButton = document.querySelector('.show_button');
// Apparizione slider al click
showButton.addEventListener('click', function(){

    // Aggiungo lo slider in pagina
    mainWrapper.innerHTML = `
    <div class="slider_wrapper justify-content-center align-items-center w-50 h-50">
        <i class="fas fa-arrow-alt-circle-left fs-1 text-success"></i>
        <div class="slider w-100 h-100 bg-success d-flex justify-content-center align-items-center rounded"></div>
        <i class="fas fa-arrow-alt-circle-right fs-1 text-success"></i>
    </div>
    `;
    // Seleziono il wrapper appena creato
    const sliderWrapper = document.querySelector('.slider_wrapper');

    // Faccio apparire il wrapper con lo slider e il pulsante sparisce
    sliderWrapper.classList.add('active');
    showButton.classList.add('d-none');
    // Creo un array vuoto per gli h2
    const titlesArray = [];
    // Popolo lo slider e l'array con la lista
    for(let i = 0; i < firstNames.length; i++){
        const currentTitle = `<h2 class="text-white mb-0 names_title">${fakeList[i]}</h2>`;
        document.querySelector('.slider').innerHTML += currentTitle;
        titlesArray.push(currentTitle);
    }

    // Creo la variabile per l'item attivo (lo slider partirà dal primo elemento della fake list)
    let activeItem = 0;
    // Do l'active al primo elemento
    document.getElementsByClassName('names_title')[activeItem].classList.add('active');
    
    // Variabili per le freccette aggiunte prima
    const leftArrow = document.querySelector('.fa-arrow-alt-circle-left');
    const rightArrow = document.querySelector('.fa-arrow-alt-circle-right');

    // Click left arrow
    leftArrow.addEventListener('click', function(){
        // Rimuovo l'active al nome attuale
        document.getElementsByClassName('names_title')[activeItem].classList.remove('active');
        // Diminuisco di 1 il valore dell'active ma se è il primo elemento ripartirà dalla fine
        if(!(activeItem === 0)){
            activeItem--;    
        } else{
            activeItem = titlesArray.length -1;
        }
        
        // Aggiungo l'active all'elemento precedente
        document.getElementsByClassName('names_title')[activeItem].classList.add('active');
    });

    // Click right arrow
    rightArrow.addEventListener('click', function(){
        // Rimuovo l'active al nome attuale
        document.getElementsByClassName('names_title')[activeItem].classList.remove('active');
        // Diminuisco di 1 il valore dell'active ma se è il primo elemento ripartirà dalla fine
        if(!(activeItem === titlesArray.length - 1)){
            activeItem++;    
        } else{
            activeItem = 0;
        }
        
        // Aggiungo l'active all'elemento precedente
        document.getElementsByClassName('names_title')[activeItem].classList.add('active');
    });
    console.log(...titlesArray);
});





