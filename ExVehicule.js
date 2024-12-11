class Vehicule {
    constructor(nom) {
        this.nom = nom;
    }

    deplacer() {
        console.log(`${this.nom} se déplace.`);
    }
}

class Voiture extends Vehicule {
    constructor(nom) {
        super(nom);
    }

    klaxonner() {
        console.log(`${this.nom} klaxonne : Bip bip !`);
    }
}

class Bateau extends Vehicule {
    constructor(nom) {
        super(nom);
    }

    naviguer() {
        console.log(`${this.nom} navigue sur l'eau.`);
    }
}


const maVoiture = new Voiture("Toyota");
maVoiture.deplacer();
maVoiture.klaxonner();
const monBateau = new Bateau("Titanic");
monBateau.deplacer();
monBateau.naviguer();