let panier = [];

function ajouterAuPanier(nom, prix) {
    panier.push({ nom, prix });
    afficherPanier();
}

function afficherPanier() {
    let zone = document.getElementById("panier");
    let total = 0;

    zone.innerHTML = "<h2>🛒 Panier</h2>";

    panier.forEach(produit => {
        total += produit.prix;
        zone.innerHTML += `<p>${produit.nom} - ${produit.prix}€</p>`;
    });

    zone.innerHTML += `<h3>Total : ${total}€</h3>`;
}
