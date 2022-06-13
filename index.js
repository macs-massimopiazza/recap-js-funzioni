//------------------------------------------
// DEFINIZIONE E CHIAMATA
// function miaFunzione() {
//     console.log("siamo dentro la funzione");
// }

// miaFunzione();
// miaFunzione();
// miaFunzione();
//------------------------------------------

//------------------------------------------
//DEFINIZIONE, CHIAMATA E RETURN
// function returnMessage() {
//     let message = "ciao come va";
    
//     return message;
// }

// let output = returnMessage();

// console.log(output);
//------------------------------------------

//------------------------------------------
//PARAMETRI FUNZIONE
// function myFunction(param1, param2) {
//     console.log(param1, param2);
// }


// myFunction("ciao", "comeva");

// myFunction("bubu", "baba");
//------------------------------------------

//------------------------------------------
//UTILIZZO FUNZIONE COMPLETA
// function myFunction(param1, param2) {
//     // return `${param1} ${param2}?`;
//     return param1 + " " + param2 + "?";
// }

// console.log(myFunction("ciao", "come va"));
// let domanda = myFunction("come", "ti chiami");

// console.log(domanda);
//------------------------------------------

//------------------------------------------
// creiamo una funzione che, dati due numeri, ritorna la somma di essi. l'output della funzione sarà la somma dei 2 numeri dati in input;
function sumGenerator(numA, numB) {
    const sum = numA + numB;
    return sum;
}

let result = sumGenerator(10, 10);
console.log(result);


console.log("la somma di 6 + 6: " + sumGenerator(6, 6))
//------------------------------------------