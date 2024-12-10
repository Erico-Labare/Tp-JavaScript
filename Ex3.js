const prompt = require("prompt-sync")({ sigint: true });

const phrase = prompt("Entrez une phrase : ");

const longueur = phrase.length;
console.log(`La longueur de votre phrase est : ${longueur} caractères.`);

const phraseEnMajuscules = phrase.toUpperCase();
console.log(`Votre phrase en majuscules : ${phraseEnMajuscules}`);

const motCherche = "JavaScript";
const estPresent = phrase.toLowerCase().includes(motCherche.toLowerCase());
if (estPresent) {
    console.log(`Le mot "${motCherche}" est présent dans votre phrase.`);
} else {
    console.log(`Le mot "${motCherche}" n'est pas présent dans votre phrase.`);
}