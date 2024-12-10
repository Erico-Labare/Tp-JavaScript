const etudiants = [
    { nom: "Alice", note: 15 },
    { nom: "Bob", note: 12 },
    { nom: "Claire", note: 18 },
    { nom: "David", note: 10 },
    { nom: "Emma", note: 20 }
];

function analyserEtudiants(etudiants, seuil) {
    const etudiantsFiltres = etudiants.filter(etudiant => etudiant.note > seuil);

    const sommeNotes = etudiants.reduce((total, etudiant) => total + etudiant.note, 0);
    const moyenne = sommeNotes / etudiants.length;

    return {
        etudiantsFiltres,
        moyenne
    };
}

const seuil = 14;
const resultat = analyserEtudiants(etudiants, seuil);

console.log("Étudiants avec une note supérieure à", seuil, ":", resultat.etudiantsFiltres);
console.log("Moyenne des notes :", resultat.moyenne.toFixed(2));