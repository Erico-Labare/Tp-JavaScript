const prompt = require("prompt-sync")({sigint : true})

const num1 = parseFloat(prompt("Entrez le premier nombre : "));
const num2 = parseFloat(prompt("Entrez le deuxième nombre : "));

const addition = num1 + num2;
const subtraction = num1 - num2;
const multiplication = num1 * num2;
const division = num2 !== 0 ? num1 / num2 : "Erreur (division par zéro)";

console.log(`Résultats des opérations :`);
console.log(`Addition : ${addition}`);
console.log(`Soustraction : ${subtraction}`);
console.log(`Multiplication : ${multiplication}`);
console.log(`Division : ${division}`);
