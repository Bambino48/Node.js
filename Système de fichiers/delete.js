const fs = require('fs'); // inclusion du module système de fichiers

fs.unlink('test2.txt', (err) => { // suppression du fichier test.txt
    // sourcery skip: use-braces
    if (err) throw err; // si une erreur se produit, elle est levée
    console.log('Le fichier test.txt a été supprimé'); // message de confirmation
}
); // fin de la fonction unlink

// la methode unlink() permet de supprimer un fichier
// la méthode rmdir() permet de supprimer un répertoire
// la méthode rmdir() ne peut pas supprimer un répertoire non vide
// la méthode rmdir() ne peut pas supprimer un répertoire contenant des fichiers