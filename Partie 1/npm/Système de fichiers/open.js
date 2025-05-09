const fs = require('fs'); // inclusion du module système de fichiers

fs.open('test.txt', 'r+', (err, fd) => { // ouverture d'un fichier
// sourcery skip: use-braces
    if (err) throw err; // si une erreur se produit, elle est levée
    console.log('Le fichier a été ouvert avec succès'); // message de confirmation
}); // fin de la fonction open

// La méthode open() permet d'ouvrir un fichier.
// Elle prend en paramètre le nom du fichier, le mode d'ouverture (lecture, écriture, etc.)
// et une fonction de rappel qui sera exécutée une fois l'opération terminée.
// Si une erreur se produit, elle sera levée et affichée dans la console.
// Sinon, un message de confirmation sera affiché dans la console.
// La méthode open() est utilisée pour ouvrir un fichier et obtenir un descripteur de fichier (fd).
// Le descripteur de fichier est un identifiant unique pour le fichier ouvert.
// Il peut être utilisé pour effectuer d'autres opérations sur le fichier, comme la lecture ou l'écriture.