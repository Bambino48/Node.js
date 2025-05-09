// Utilisation d'un package tiers
const http = require('http');
const uc = require('upper-case');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(uc.upperCase('Hello World!'));
    res.end();
}).listen(8080, () => {
    console.log('Server is running at http://localhost:8080/');
});

/**
 * Explication :
 * - On importe le module http de Node.js pour créer un serveur HTTP.
 * - On importe le module upper-case pour transformer le texte en majuscules.
 * - On crée un serveur qui écoute sur le port 8080.
 * - Lorsqu'une requête est reçue, le serveur répond avec un message "Hello World!" en majuscules.
 * - On utilise la méthode upperCase du module upper-case pour transformer le texte.
 * - On envoie la réponse au client avec le code de statut 200 (OK) et le type de contenu HTML.
 * - On affiche un message dans la console pour indiquer que le serveur est en cours d'exécution.
 * - On utilise la méthode writeHead pour définir les en-têtes de la réponse.
 * - On utilise la méthode write pour écrire le contenu de la réponse.
 * - On utilise la méthode end pour terminer la réponse.
 * - On utilise la méthode listen pour démarrer le serveur et écouter sur le port spécifié.
 * - On utilise la méthode createServer pour créer un serveur HTTP.
 */