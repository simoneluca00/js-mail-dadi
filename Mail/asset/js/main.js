// 1) Chiedi all’utente la sua email
let emailUtente = prompt("Inserisci qui sotto la tua email:");

// 1.1) creazione array con tutte le email già registrate
let utentiRegistrati = [ "si.zaino@libero.it", "abbaemme@hotmail.it", "giovlet@icloud.com", "pas.clo@virgilio.com"]

// 1.2) definizione tag HTML nel quale inserire il messaggio
let containerEmail = document.getElementById("email_control");

// 2) controlla che sia nella lista di chi può accedere
let emailInserita = false;

for ( i=0; i < utentiRegistrati.length; i++ ) {
    if ( utentiRegistrati[i] == emailUtente ) {
        emailInserita = true;
    }
}

// 3) stampa un messaggio appropriato sull’esito del controllo
if ( emailInserita == true ) {
    containerEmail.innerHTML = `L'email
     <span class="sz_email">${emailUtente}</span>, 
     da te inserita, risulta già associata ad un account. <br>
     Accedi qui:`;
    console.log("email registrata");
} else {
    containerEmail.innerHTML = `L'email
    <span class="sz_email">${emailUtente}</span>, 
    da te inserita, risulta non essere associata a nessun account.<br> 
    Vuoi crearne uno?`;
    console.log("email non registrata");
}