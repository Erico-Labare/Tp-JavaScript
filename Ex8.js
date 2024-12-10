const prompt = require("prompt-sync")({ sigint: true });

const nombreAleatoire = Math.floor(Math.random() * 100) + 1;
let essaisRestants = 5;

console.log("Bienvenue dans le jeu de devinettes !");
console.log("J'ai choisi un nombre entre 1 et 100. Vous avez 5 essais pour le deviner.");

while (essaisRestants > 0) {
    const tentative = parseInt(prompt(`Il vous reste ${essaisRestants} essais. Devinez le nombre : `), 10);

    if (isNaN(tentative) || tentative < 1 || tentative > 100) {
        console.log("Veuillez entrer un nombre valide entre 1 et 100.");
        continue;
    }

    if (tentative === nombreAleatoire) {
        console.log("Félicitations ! Vous avez deviné le nombre !");
        break;
    } else if (tentative < nombreAleatoire) {
        console.log("Le nombre à deviner est plus grand.");
    } else {
        console.log("Le nombre à deviner est plus petit.");
    }

    essaisRestants--;

    if (essaisRestants === 0) {
        console.log(`Désolé, vous avez épuisé vos essais. Le nombre était ${nombreAleatoire}.`);
    }
}