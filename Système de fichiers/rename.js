const fs = require('fs'); // inclusion du module système de fichiers

fs.rename('test.txt', 'test2.txt', (err) => { // renommer le fichier test.txt en test2.txt
    // sourcery skip: use-braces
    if (err) throw err; // si une erreur se produit, elle est levée
    console.log('Le fichier a été renommé en test2.txt'); // message de confirmation
}); // fin de la fonction rename

// la methode rename() permet de renommer un fichier ou un répertoire