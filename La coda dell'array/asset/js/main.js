// 1) Creare un array con un numero a piacere di elementi.
let strumentiMusicali = [ "batteria", "chitarra", "pianoforte", "tromba", "clarinetto", "violino", "xilofono", "flauto", "arpa" ];

// 2) Stampare a schermo, con un ciclo, gli ultimi 5 elementi dell'array.
for ( i = (strumentiMusicali.length  - 1); i >= 4; i--  ) {
    document.getElementById("containerListOne").innerHTML += `<div class="strumento">${strumentiMusicali[i]}</div>`;
}
//---------------------------------------------------------------------------------------------------//
// Extra Bonus
// Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri interi casuali quanti sono gli elementi da inserire.
    // 1) dichiarzione array vuoto
    let numeri = [];

    // 2) domanda all'utente per definire la length dell'array
    numeriLength = prompt("Quanti numeri dovrà contenere la lista?");

    // 3) ciclo for per stampare gli array 
    for ( i = 0; i <= numeriLength; i++ ) {
        let numeriRandom = Math.floor(Math.random()* 1000);
        document.getElementById("containerListTwo").innerHTML += `<div class= "numeri_random">${numeriRandom}</div>`;
    }
    


// Super Extra Bonus: chiedere all'utente anche quanti elementi vanno estratti dal fondo dell'array.

