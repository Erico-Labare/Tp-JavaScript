const prompt = require("prompt-sync")({ sigint: true });


function genererMotDePasse(longueur) {
    const lettresMajuscules = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lettresMinuscules = "abcdefghijklmnopqrstuvwxyz";
    const chiffres = "0123456789";
    const tousLesCaracteres = lettresMajuscules + lettresMinuscules + chiffres;

    let motDePasse = "";

    motDePasse += lettresMajuscules.charAt(Math.floor(Math.random() * lettresMajuscules.length));

    motDePasse += lettresMinuscules.charAt(Math.floor(Math.random() * lettresMinuscules.length));

    motDePasse += chiffres.charAt(Math.floor(Math.random() * chiffres.length));

    for (let i = motDePasse.length; i < longueur; i++) {
        const indexAleatoire = Math.floor(Math.random() * tousLesCaracteres.length);
        motDePasse += tousLesCaracteres.charAt(indexAleatoire);
    }

    return motDePasse.split('').sort(() => Math.random() - 0.5).join('');
}

const longueur = parseInt(prompt("Entrez la longueur souhaitée pour le mot de passe : "), 10);

if (isNaN(longueur) || longueur <= 0) {
    console.log("Erreur : veuillez entrer un nombre valide supérieur à 0.");
} else {
    const motDePasse = genererMotDePasse(longueur);
    console.log(`Votre mot de passe aléatoire est : ${motDePasse}`);
}