// Comme "product" j'ai utilisé des livres

let bibliotheque = [];

function ajouterLivre(titre) {
    if (!bibliotheque.includes(titre.toLowerCase())) {
        bibliotheque.push(titre.toLowerCase());
        console.log(`Le livre "${titre}" a été ajouté.`);
    } else {
        console.log(`Le livre "${titre}" existe déjà dans la bibliothèque.`);
    }
}

function supprimerLivre(titre) {
    const index = bibliotheque.indexOf(titre.toLowerCase());
    if (index !== -1) {
        bibliotheque.splice(index, 1);
        console.log(`Le livre "${titre}" a été supprimé.`);
    } else {
        console.log(`Aucun livre trouvé avec le titre "${titre}", impossible de supprimer.`);
    }
}

function rechercherParTitre(titre) {
    if (bibliotheque.includes(titre.toLowerCase())) {
        return `Livre trouvé : "${titre}"`;
    } else {
        return `Aucun livre trouvé avec le titre "${titre}"`;
    }
}

ajouterLivre("Le Petit Prince");
ajouterLivre("1984");
ajouterLivre("Le Seigneur des Anneaux");

console.log(rechercherParTitre("1984")); // Trouvé
console.log(rechercherParTitre("Harry Potter")); // Non trouvé

supprimerLivre("1984"); // Suppression réussie
console.log(rechercherParTitre("1984")); // Non trouvé
supprimerLivre("Harry Potter"); // Non trouvé, impossible de supprimer
