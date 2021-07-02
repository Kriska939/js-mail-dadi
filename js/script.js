/* ESERCIZIO MAIL

1- Chiedere all'utente la sua email
2- Crea una lista di email (array)
3- Confronta la mail inserita con la lista creata
4- Stampa un messaggio appropriato per l'esito dello step precedente

*/

//STEP 1:

var userMail = prompt('Inserisci la tua email');

// VALIDATION: 

if (userMail < 1) {
    alert('Non hai inserito dati validi');
}

//STEP 2:

var listaMail = ["mailCorretta@mail.it", "mailRandom1@mail.it", "mailRandom2@mail.it", "mailRandom3@mail.it" ];

//STEP 3-4:

var displayFeedback = document.getElementById('userFeedback');

    if (listaMail.includes(userMail)) {

         displayFeedback.innerText= "Congratulazioni, hai effettuato il login";

    }

    else {
        displayFeedback.innerText = "Ops! Non hai i permessi per accedere";

    }


// console check:
console.table(listaMail);
console.log(userMail);

