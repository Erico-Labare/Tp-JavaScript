const prompt = require("prompt-sync")({ sigint: true });

function jeuMotMystere() { 
    const mots = ["jeu", "code", "javascript", "ordinateur", "coffre"];
    const motMystere = mots[Math.floor(Math.random() * mots.length)];
    const tentativesMax = 6;
    let tentativesRestantes = tentativesMax;
    let motPartiel = Array(motMystere.length).fill("_");
    const lettresProposees = new Set();

    console.log("Bienvenue au jeu du mot mystère !");
    console.log(`Vous avez ${tentativesMax} tentatives pour deviner le mot.`);

    while (tentativesRestantes > 0) {
        console.log(`\nMot actuel : ${motPartiel.join(" ")}`);
        console.log(`Lettres déjà proposées : ${[...lettresProposees].join(", ") || "aucune"}`);
        const lettre = prompt("Proposez une lettre : ").toLowerCase();

        if (!lettre || lettre.length !== 1 || !/[a-z]/.test(lettre)) {
            console.log("Veuillez entrer une seule lettre valide.");
            continue;
        }

        if (lettresProposees.has(lettre)) {
            console.log("Vous avez déjà proposé cette lettre.");
            continue;
        }

        lettresProposees.add(lettre);

        if (motMystere.includes(lettre)) {
            console.log(`Bonne nouvelle ! La lettre "${lettre}" est dans le mot.`);
            for (let i = 0; i < motMystere.length; i++) {
                if (motMystere[i] === lettre) {
                    motPartiel[i] = lettre;
                }
            }
        } else {
            tentativesRestantes--;
            console.log(`Dommage ! La lettre "${lettre}" n'est pas dans le mot. Il vous reste ${tentativesRestantes} tentatives.`);
        }

        if (!motPartiel.includes("_")) {
            console.log(`\nFélicitations ! Vous avez deviné le mot : "${motMystere}"`);
            return;
        }
    }

    console.log(`\nVous avez épuisé toutes vos tentatives. Le mot mystère était : "${motMystere}". Bonne chance pour la prochaine fois !`);
}

jeuMotMystere();