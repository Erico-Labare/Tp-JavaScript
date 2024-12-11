class Robot {
    constructor(nom) {
        this.nom = nom;
        this.position = { x: 0, y: 0 };
    }

    seDeplacer(direction) {
        switch (direction.toLowerCase()) {
            case "haut":
                this.position.y += 1;
                break;
            case "bas":
                this.position.y -= 1;
                break;
            case "gauche":
                this.position.x -= 1;
                break;
            case "droite":
                this.position.x += 1;
                break;
            default:
                console.log("Direction invalide. Utilisez : haut, bas, gauche ou droite.");
        }
    }

    nettoyer() {
        console.log(`Le robot "${this.nom}" a nettoyé la position (${this.position.x}, ${this.position.y}).`);
    }

    afficherPosition() {
        console.log(`Le robot "${this.nom}" est à la position (${this.position.x}, ${this.position.y}).`);
    }

    reinitialiserPosition() {
        this.position = { x: 0, y: 0 };
        console.log(`La position du robot "${this.nom}" a été réinitialisée à (0, 0).`);
    }
}

const monRobot = new Robot("Nono le petit robot");

monRobot.afficherPosition();
monRobot.seDeplacer("haut");
monRobot.seDeplacer("droite");
monRobot.afficherPosition();
monRobot.nettoyer();
monRobot.reinitialiserPosition();
monRobot.afficherPosition();