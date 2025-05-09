const fs = require('fs'); // inclusion du module système de fichiers

fs.open('test.txt', 'r+', (err, fd) => { // ouverture d'un fichier
// sourcery skip: use-braces
    if (err) throw err; // si une erreur se produit, elle est levée
    console.log('Le fichier a été ouvert avec succès'); // message de confirmation
}); // fin de la fonction open