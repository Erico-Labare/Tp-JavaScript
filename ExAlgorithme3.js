const panier = {
    produits: [],

    totalProduits() {
        return this.produits.reduce((total, produit) => total + produit.quantite, 0);
    }
};

function ajouterProduitPanier(panier, nomProduit, quantite) {
    const produitExistant = panier.produits.find(produit => produit.nom === nomProduit);

    if (produitExistant) {
        produitExistant.quantite += quantite;
        console.log(`La quantité de "${nomProduit}" a été mise à jour : ${produitExistant.quantite}`);
    } else {
        panier.produits.push({ nom: nomProduit, quantite });
        console.log(`Le produit "${nomProduit}" a été ajouté au panier avec une quantité de ${quantite}.`);
    }

    const total = panier.totalProduits();
    console.log(`Total des produits dans le panier : ${total}`);
    return total;
}

ajouterProduitPanier(panier, "Pomme", 3);
ajouterProduitPanier(panier, "Banane", 2);
ajouterProduitPanier(panier, "Pomme", -1);
console.log("Contenu du panier :", panier.produits);