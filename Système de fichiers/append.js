const fs = require('fs'); // inclusion du module système de fichiers

fs.appendFile('test.txt', 'Hello World!', (err) => { // ajout de texte à un fichier
// sourcery skip: use-braces
    if (err) throw err; // si une erreur se produit, elle est levée
    console.log('Le texte a été ajouté au fichier test.txt'); // message de confirmation
}); // fin de la fonction appendFile

// La methode appendFile() permet d'ajouter du texte à un fichier. Si le fichier n'existe pas, il sera créé. Si le fichier existe déjà, le texte sera ajouté à la fin du fichier. La méthode prend en paramètre le nom du fichier, le texte à ajouter et une fonction de rappel qui sera exécutée une fois l'opération terminée. Si une erreur se produit, elle sera levée et affichée dans la console. Sinon, un message de confirmation sera affiché dans la console.