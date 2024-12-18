class Livre {
    constructor(titre, auteur) {
        this.titre = titre;
        this.auteur = auteur;
    }
}

class Bibliotheque {
    constructor() {
        this.livres = [];
    }

    ajouterLivre(livre) {
        this.livres.push(livre);
        console.log(`Le livre "${livre.titre}" de ${livre.auteur} a été ajouté à la bibliothèque.`);
    }

    rechercherParTitre(titre) {
        const livreTrouve = this.livres.find(livre => livre.titre.toLowerCase() === titre.toLowerCase());
        if (livreTrouve) {
            return `Livre trouvé : "${livreTrouve.titre}" par ${livreTrouve.auteur}.`;
        } else {
            return `Aucun livre trouvé avec le titre "${titre}".`;
        }
    }
}

const maBibliotheque = new Bibliotheque();

maBibliotheque.ajouterLivre(new Livre("Le Petit Prince", "Antoine de Saint-Exupéry"));
maBibliotheque.ajouterLivre(new Livre("1984", "George Orwell"));
maBibliotheque.ajouterLivre(new Livre("Le Seigneur des Anneaux", "J.R.R. Tolkien"));

console.log(maBibliotheque.rechercherParTitre("1984"));
console.log(maBibliotheque.rechercherParTitre("Harry Potter"));