    // 1) definzione tag per stampare numeroGiocatore
let messaggioGiocatore = document.getElementById("numero_giocatore"); 

    // 2) definzione tag per stampare numeroComputer
let messaggioComputer = document.getElementById("numero_computer");    

// 3) definzione btn (click)
let btnGioca = document.getElementById("btnGioca");

btnGioca.addEventListener("click",
    function() {
        // 4) Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

        let numeriDado = [1, 2, 3, 4, 5, 6];
        
        // 4.1) numero casuale per il giocatore
        let numeroGiocatore = Math.floor(Math.random() * numeriDado.length + 1);
        
        // 4.2) numero casuale per il giocatore
        let numeroComputer = Math.floor(Math.random() * numeriDado.length + 1);
        
        // 5) Stampare sulla pagina i numeri random per il giocatore e per il computer
        messaggioGiocatore.innerHTML = `${numeroGiocatore}`;
        messaggioComputer.innerHTML = `${numeroComputer}`;
        
        // 6) Stabilire il vincitore, in base a chi fa il punteggio più alto.
        if(numeroGiocatore > numeroComputer) {
            document.getElementById("result").innerHTML = `Complimenti... fai subito capire al computer chi comanda!`;
        } else if (numeroGiocatore < numeroComputer) {
            document.getElementById("result").innerHTML = `Peccato... il computer è riuscito a debuggarti!`;
        } else if (numeroComputer == numeroGiocatore) {
            document.getElementById("result").innerHTML = `Nessuno spargimento di sangue... chi è il fortunato tra i due?`
        }
    }
)

