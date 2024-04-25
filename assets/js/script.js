let numerador = parseInt (prompt  ("Digite o numerador"));
console.log("Numerador..." + ": " + numerador);
let denominador = parseInt (prompt ("Digite um denominador"));
console.log("Denominador..." + ": " + denominador);
 

if (denominador == 0) {
    alert ("Não é possível dividir por zero.");
    console.log ("Não é possível dividir por zero.");
    
} else {
    alert (numerador + " dividido por " + denominador + " é " + numerador / denominador);
    console.log(numerador + " dividido por " + denominador + " é " + numerador / denominador);
    }