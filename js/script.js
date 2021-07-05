/* ESERCIZIO MAIL

1- Chiedere all'utente la sua email
2- Crea una lista di email (array)
3- Confronta la mail inserita con la lista creata
4- Stampa un messaggio appropriato per l'esito dello step precedente

*/

//STEP 1:

var userMail = prompt('Inserisci la tua email', "mailCorretta@mail.it");

//VALIDATION: 

if (userMail < 1) {
    alert('Non hai inserito dati validi');
}

//STEP 2:

var listaMail = ["mailCorretta@mail.it", "mailRandom1@mail.it", "mailRandom2@mail.it", "mailRandom3@mail.it"];

//STEP 3-4:

var isAllowed = false;
var displayFeedback = document.getElementById('userFeedback');

for (var i = 0; i < listaMail.length; i++) {

    if (userMail === listaMail[i]) {
        isAllowed = true;
    }
}

if (isAllowed) {
    displayFeedback.innerText = "Congratulazioni, hai effettuato il login :)";
}
else {
    displayFeedback.innerText = "Ops! Non hai i permessi per accedere :(";
}

// console check:
console.table(listaMail);
console.log(userMail);


/* ESERCIZIO DADI

1- Generare 2 numeri random (range 1-6), uno per l'utente e uno per la CPU
2- Confronta i numeri generati. Il più alto è il vincitore
3- Stampa un messaggio appropriato con l'esito del gioco

*/

// //STEP 1: 

// var userNumber = Math.floor(Math.random() * 6) + 1;
// var cpuNumber =  Math.floor(Math.random() * 6) + 1;

// //STEP 2-3:

// var winnerLoser = document.getElementById('gameEnd');

// if(userNumber > cpuNumber) {
//     gameEnd.innerText= "Congratulazioni, hai vinto!";
// } else if (userNumber < cpuNumber) {
//     gameEnd.innerText= "Hai perso!";
// }

// else {
//     gameEnd.innerText= "Pareggio. Incredibile.";
// }

// // console check:
// console.log(userNumber);
// console.log(cpuNumber);