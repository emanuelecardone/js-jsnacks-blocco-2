// CONSEGNA

// Generatore di “nomi cognomi” casuali: prendendo
// una lista di nomi e una lista di cognomi,
// Gatsby vuole generare una falsa lista di invitati.


// SOLUZIONE

// Creo gli array di nomi e cognomi e la lista vuota che riempirò dopo
const firstNames = ['Emanuele', 'Matteo', 'Francesca', 'Daniela', 'Maria', 'Giovanni', 'Valerio', 'Alex', 'Franco', 'Miriam'];
const lastNames = ['Battisti', 'Innocenzi', 'Manfrinetti', 'Kourtis', 'Zecchiaroli', 'Pandolfi', 'Mermolia', 'Savastano', 'Sergi','Cardone'];
const fakeList = [];

for(let i = 0; i < firstNames.length; i++){
    // Seleziono in modo casuale un elemento di entrambe le liste
    const firstNameForList = firstNames[Math.floor(Math.random() * firstNames.length - 1 + 1) + 0];
    const lastNameForList = lastNames[Math.floor(Math.random() * lastNames.length - 1 + 1) + 0];
    // Aggiungo il nome random e cognome random alla lista
    fakeList.push(firstNameForList + ' ' +lastNameForList);
}

// Output
alert(`Questi erano i nomi: ${firstNames}

Questi erano i cognomi: ${lastNames}

Questa è la lista generata: ${fakeList}
`);