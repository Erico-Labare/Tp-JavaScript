function analyserPhrase(phrase) {
    const mots = phrase.split(/\s+/).filter(mot => mot.trim() !== "");

    const resultat = {
        nombreTotalMots: mots.length,
        motLePlusLong: "",
        occurrences: {}
    };

    mots.forEach(mot => {
        if (mot.length > resultat.motLePlusLong.length) {
            resultat.motLePlusLong = mot;
        }

        const motNormalise = mot.toLowerCase();
        resultat.occurrences[motNormalise] = (resultat.occurrences[motNormalise] || 0) + 1;
    });

    return resultat;
}

const phrase = "Le JavaScript est génial et le JavaScript est populaire";
const analyse = analyserPhrase(phrase);
console.log(analyse);