/* 
!!!PROBLEMA!!!
-CHIEDERE KM DA PERCORRERE ED ETA' ALL'UTENTE
-COSTO 0,21€ AL KM
-SCONTO 20% UNDER 18
-SCONTO 40% OVER 65
-PREZZO SCRITTO CON 2 CIFRE DECIMALI
*/

// VARIABILI
const lunghezzaPercorso = prompt(`Quanti km misura il percorso che vuoi fare?`);

const age = prompt(`Quanti anni hai?`);

const price = (lunghezzaPercorso * (0.21));

const price1 = ((lunghezzaPercorso * (0.21))-(price/100*20));

const price2 = ((lunghezzaPercorso * (0.21))-(price/100*40));

// LOGICA
if (age<18) {
    document.writeln(`<p> ${price1} €</p>`);
} else if (age>65) {
    document.writeln(`<p> ${price2} €</p>`);
} else {
    document.writeln(`<p> ${price} €</p>`);
}