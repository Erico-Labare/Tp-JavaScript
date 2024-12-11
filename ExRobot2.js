class Robot {
    constructor(nom) {
        this.nom = nom;
        this.position = { x: 0, y: 0 };
        this.positionsNettoyees = []
        this.dernierDeplacement = null;
    }

    seDeplacer(direction) {
        switch (direction.toLowerCase()) {
            case 'haut':
                this.position.y += 1;
                this.dernierDeplacement = 'haut';
                break;
            case 'bas':
                this.position.y -= 1;
                this.dernierDeplacement = 'bas';
                break;
            case 'gauche':
                this.position.x -= 1;
                this.dernierDeplacement = 'gauche';
                break;
            case 'droite':
                this.position.x += 1;
                this.dernierDeplacement = 'droite';
                break;
            default:
                console.log("Direction invalide. Utilisez : haut, bas, gauche ou droite.");
                return;
            }
        console.log(`${this.nom} s'est déplacé vers ${direction}. Position actuelle : (${this.position.x}, ${this.position.y}).`);

    }

    reculer() {
        if (!this.dernierDeplacement) {
            console.log(`${this.nom} n'a pas encore bougé. Impossible de reculer.`);
            return;
        }

        switch (this.dernierDeplacement) {
            case 'haut':
                this.position.y -= 1;
                break;
            case 'bas':
                this.position.y += 1;
                break;
            case 'gauche':
                this.position.x += 1;
                break;
            case 'droite':
                this.position.x -= 1;
                break;
        }
        console.log(`${this.nom} a reculé. Nouvelle position : (${this.position.x}, ${this.position.y}).`);
    }

    nettoyer() {
        const positionActuelle = `(${this.position.x}, ${this.position.y})`;
        console.log(`Le robot "${this.nom}" a nettoyé la position (${this.position.x}, ${this.position.y}).`);
        this.positionsNettoyees.push(positionActuelle);
    }

    historiqueNettoyage() {
        console.log(`Historique des positions nettoyées par ${this.nom} :`);
        if (this.positionsNettoyees.length > 0) {
            console.log(this.positionsNettoyees.join(", "));
        } else {
            console.log("Aucune position nettoyée pour le moment.");
        }
    }

    afficherPosition() {
        console.log(`Le robot "${this.nom}" est à la position (${this.position.x}, ${this.position.y}).`);
    }

    reinitialiserPosition() {
        this.position = { x: 0, y: 0 };
        console.log(`La position du robot "${this.nom}" a été réinitialisée à (0, 0).`);
    }
}

const monRobot = new Robot("NONO le petit robot 2000");

monRobot.seDeplacer("haut");
monRobot.nettoyer();
monRobot.reculer();
monRobot.seDeplacer("droite");
monRobot.nettoyer();
monRobot.reculer();
monRobot.afficherPosition();
monRobot.historiqueNettoyage();
monRobot.reinitialiserPosition();
monRobot.historiqueNettoyage();