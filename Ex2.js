const prompt = require("prompt-sync")({ sigint: true });


const askAge = () => {
    const age = parseInt(prompt("Entrez votre âge : "));

    if (isNaN(age) || age < 0) {
        console.log("Erreur : veuillez entrer un âge valide (un nombre positif).");
        return askAge();
    }

    return age;
}


const age = askAge();

if (age < 18) {
    console.log("Vous êtes mineur.");
} else {
    console.log("Vous êtes majeur.");
}