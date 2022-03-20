// 1) Creare un array con un numero a piacere di elementi.
let strumentiMusicali = [ "batteria", "chitarra", "pianoforte", "tromba", "clarinetto", "violino", "xilofono", "flauto", "arpa" ];

let elementiDaRimuovere = 5;

// 2) Stampare a schermo, con un ciclo, gli ultimi 5 elementi dell'array.
for ( i = (strumentiMusicali.length  - 1); i >= strumentiMusicali.length - elementiDaRimuovere; i-- ) {
    document.getElementById("containerListOne").innerHTML += `<div class="strumento">${strumentiMusicali[i]}</div>`;
}
// ---- 2) CON QUEST'ULTIMO PRENDE IN ORDINE DALL' ULTIMO FINO AL "LENGTH - 5" 

/* 2.1)
    for ( i = (strumentiMusicali.length  - 5); i < strumentiMusicali.length; i++ ) {
        document.getElementById("containerListOne").innerHTML += `<div class="strumento">${strumentiMusicali[i]}</div>`;
    }
*/      // ---- 2.1) CON QUEST'ULTIMO PRENDE IN ORDINE DAL "LENGTH - 5" FINO ALL'ULTIMO

//---------------------------------------------------------------------------------------------------//



// Extra Bonus: Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri interi casuali quanti sono gli elementi da inserire.
   
    // 1) dichiarzione array vuoto
    const numeriTwo = [];

    // 2) domanda all'utente per definire la length dell'array
    let numeriLengthTwo = parseInt(prompt("Quanti numeri dovrà contenere la prima lista? (2° STEP)"));

    // 3) validazione elementare
    if (isNaN(numeriLengthTwo)) {
        alert("Inserire solo valori numerici")
    };

    // 4) ciclo for per inserire i numeri random nell'array 
    for ( i = 0; i < numeriLengthTwo; i++ ) {
        let numeriRandomTwo = Math.floor(Math.random()* 1000);
        numeriTwo.push(numeriRandomTwo);
        document.getElementById("containerListTwo").innerHTML += `<div class= "numeri_random">${numeriRandomTwo}</div>`;
    }
//---------------------------------------------------------------------------------------------------//
    

// Super Extra Bonus: chiedere all'utente anche quanti elementi vanno estratti dal fondo dell'array 
// IMPOSTATO PER STAMPARE GLI ULTIMI VALORI DELL'ARRAY DEL SECONDO STEP
 
// 1) dichiarzione array vuoto
 const numeriThree = [];

// 2) domanda all'utente per definire la length dell'array
let  numeriLengthThree = parseInt(prompt("Quanti numeri dovrà contenere la seconda lista? (3° STEP)"));

// 3) validazione elementare
 if (isNaN(numeriLengthThree)) {
     alert("Inserire solo valori numerici")
 }

// 4) ciclo for per inserire i numeri random nell'array 

 for ( y = 0; y < numeriLengthThree; y++ ) {
     let numeriRandomThree = Math.floor(Math.random()* 1000);
     numeriThree.push(numeriRandomThree);
     document.getElementById("containerListThree").innerHTML += `<div class= "numeri_estrazione">${numeriRandomThree}</div>`;
 }

//  5) prompt per chiedere quanti numeri estrarre dal fondo dell'array
let numeriDaEstrarre = parseInt(prompt("Quanti numeri vuoi estrarre dal fondo della lista? (3° STEP)"));

// 6) validazione elementare
if (isNaN(numeriDaEstrarre)) {
    alert("Inserire solo valori numerici")
}

// 7) estrarre elementi dal fondo dell'array
for( z = 0; z < numeriDaEstrarre; z++ ) {
    let numeriEstratti = numeriThree.pop();
    document.getElementById("containerListThreeExtract").innerHTML += `<div class= "numeri_estrazione">${numeriEstratti}</div>`;

}