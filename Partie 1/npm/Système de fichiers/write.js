const fs = require('fs'); // inclusion du module système de fichiers

fs.writeFile('test.txt', 'Hello Content !', (err) => { // écriture de texte dans un fichier
    // sourcery skip: use-braces
    if (err) throw err; // si une erreur se produit, elle est levée
    console.log('Le texte a été écrit dans le fichier test.txt'); // message de confirmation
}); // fin de la fonction writeFile