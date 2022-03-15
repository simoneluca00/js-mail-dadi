// 1) Creare un array con un numero a piacere di elementi.
let strumentiMusicali = [ "batteria", "chitarra", "pianoforte", "tromba", "clarinetto", "violino", "xilofono", "flauto", "arpa" ];
console.log(strumentiMusicali);
// 2) Stampare a schermo, con un ciclo, gli ultimi 5 elementi dell'array.
for ( i = (strumentiMusicali.length  - 1); i >= 3; i--  ) {
    document.getElementById("containerList").innerHTML += `<div>${strumentiMusicali[i]}</div>`;
}
// Attenzione #1: quanti elementi minimo dovrà contenere l'array?
// Attenzione #2: il ciclo deve essere costruito per estrarre gli ultimi elementi da qualsiasi array, anche se non conosciamo a priori quanti elementi contiene.
// Extra Bonus
// Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri interi casuali quanti sono gli elementi da inserire.
// Attenzione #3: quali controlli dobbiamo fare sull'input dell'utente?
// Super Extra Bonus: chiedere all'utente anche quanti elementi vanno estratti dal fondo dell'array.
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
