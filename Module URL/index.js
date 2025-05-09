const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    const filename = "." + q.pathname;
    fs.readFile(filename, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080, () => {
    console.log("Server is running at http://localhost:8080/");
});

/**
 * Explications :
 * - Le module `http` est utilisé pour créer un serveur HTTP.
 * - Le module `url` est utilisé pour analyser l'URL de la requête.
 * - Le module `fs` est utilisé pour lire les fichiers du système de fichiers.
 * - La méthode `createServer` crée un serveur qui écoute les requêtes sur le port 8080.
 * - La méthode `parse` du module `url` analyse l'URL de la requête et renvoie un objet contenant des informations sur l'URL.
 * - La méthode `readFile` du module `fs` lit le fichier spécifié par le chemin d'accès et renvoie son contenu.
 * - Si le fichier est trouvé, il est renvoyé avec un code de statut 200 (OK).
 * - Si le fichier n'est pas trouvé, un code de statut 404 (Not Found) est renvoyé avec un message d'erreur.
 * - Le serveur écoute sur le port 8080 et affiche un message dans la console lorsque le serveur est en cours d'exécution.
 * - Le chemin d'accès du fichier est obtenu à partir de l'URL de la requête.
 * - Le chemin d'accès est préfixé par un point (.) pour indiquer le répertoire courant.
 * - La méthode `end` est utilisée pour terminer la réponse et envoyer les données au client.
 * - Le serveur est accessible à l'adresse http://localhost:808
 */