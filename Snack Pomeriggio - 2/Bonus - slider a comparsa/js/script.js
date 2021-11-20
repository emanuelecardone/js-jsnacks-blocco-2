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

    // Aggiungo lo slider in pagina e il wrapper della lista dei nomi creati
    mainWrapper.innerHTML = `
    <div class="list_wrapper d-flex justify-content-around align-items-center bg-success rounded w-75 h-25 text-center">

    </div>
    ` + `
    <div class="slider_wrapper justify-content-center align-items-center w-50 h-50">
        <i class="fas fa-arrow-alt-circle-left fs-1 text-success"></i>
        <div class="slider w-100 h-100 bg-success d-flex justify-content-center align-items-center rounded"></div>
        <i class="fas fa-arrow-alt-circle-right fs-1 text-success"></i>
    </div>
    `;
    // Seleziono i wrappers appena creati
    const listWrapper = document.querySelector('.list_wrapper');
    const sliderWrapper = document.querySelector('.slider_wrapper');

    // Faccio apparire i wrappers e il pulsante sparisce
    listWrapper.classList.add('active');
    sliderWrapper.classList.add('active');
    showButton.classList.add('d-none');
    // Creo un array vuoto per gli h2
    const titlesArray = [];
    // Popolo lo slider, la lista in pagina e l'array con la lista
    for(let i = 0; i < firstNames.length; i++){
        const currentTitle = `<h2 class="text-white mb-0 names_title">${fakeList[i]}</h2>`;
        document.querySelector('.slider').innerHTML += currentTitle;
        listWrapper.innerHTML += `<span class="text-white list_span fs-5 p-2 position-relative">${fakeList[i]}</span>`;
        titlesArray.push(currentTitle);
    }

    // Creo la variabile per l'item attivo (lo slider partirà dal primo elemento della fake list)
    let activeItem = 0;
    // Do l'active al primo elemento dello slider e della lista in pagina
    document.getElementsByClassName('names_title')[activeItem].classList.add('active');
    document.getElementsByClassName('list_span')[activeItem].classList.add('active');
    
    // Variabili per le freccette aggiunte prima
    const leftArrow = document.querySelector('.fa-arrow-alt-circle-left');
    const rightArrow = document.querySelector('.fa-arrow-alt-circle-right');

    // Click left arrow
    leftArrow.addEventListener('click', function(){
        // Rimuovo l'active al nome attuale nello slider e nella lista in pagina
        document.getElementsByClassName('names_title')[activeItem].classList.remove('active');
        document.getElementsByClassName('list_span')[activeItem].classList.remove('active');
        // Diminuisco di 1 il valore dell'active ma se è il primo elemento ripartirà dalla fine
        if(!(activeItem === 0)){
            activeItem--;    
        } else{
            activeItem = titlesArray.length -1;
        }
        
        // Aggiungo l'active agli elementi precedenti
        document.getElementsByClassName('names_title')[activeItem].classList.add('active');
        document.getElementsByClassName('list_span')[activeItem].classList.add('active');
    });

    // Click right arrow
    rightArrow.addEventListener('click', function(){
        // Rimuovo l'active al nome attuale nello slider e nella lista in pagina
        document.getElementsByClassName('names_title')[activeItem].classList.remove('active');
        document.getElementsByClassName('list_span')[activeItem].classList.remove('active');
        // Diminuisco di 1 il valore dell'active ma se è il primo elemento ripartirà dalla fine
        if(!(activeItem === titlesArray.length - 1)){
            activeItem++;    
        } else{
            activeItem = 0;
        }
        
        // Aggiungo l'active agli elementi successivi
        document.getElementsByClassName('names_title')[activeItem].classList.add('active');
        document.getElementsByClassName('list_span')[activeItem].classList.add('active');
    });
});






