// l'objet readStream permet de lire un fichier
const fs = require('fs');

const rs = fs.createReadStream('./demofile.txt');

rs.on('open', function () {
    console.log('Le fichier est ouvert');
});

/**
 * Explication :
 * - On importe le module fs qui permet de manipuler le système de fichiers
 * - On crée un flux de lecture à partir du fichier demofile.txt
 * - On écoute l'événement 'open' qui est déclenché lorsque le fichier est ouvert
 * - On affiche un message dans la console pour indiquer que le fichier est ouvert
 * - On utilise la méthode createReadStream pour créer un flux de lecture à partir du fichier spécifié
 * - On utilise la méthode on pour écouter les événements du flux de lecture
 */


// On importe le module events qui permet de gérer les événements
const events = require('events');
const eventEmitter = new events.EventEmitter();

// On crée une fonction qui sera appelée lorsque l'événement 'connection' est émi
const MyEventHandler = function () {
    console.log('Connexion réussie');
}
// On associe l'événement 'connection' à la fonction MyEventHandler
eventEmitter.on('connection', MyEventHandler);

// On émet l'événement 'connection'
eventEmitter.emit('connection');
/**
 * Explication :
 * - On importe le module events qui permet de gérer les événements
 * - On crée un objet EventEmitter qui permet de gérer les événements
 * - On crée une fonction MyEventHandler qui sera appelée lorsque l'événement 'connection' est émis
 * - On associe l'événement 'connection' à la fonction MyEventHandler
 * - On émet l'événement 'connection' en utilisant la méthode emit
 */
