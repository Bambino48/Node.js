/**
 * Module de système de fichiers
 * @module fs : Système de fichiers (Lire, Créer, Écrire, Supprimer Renommer et Mettre à jour des fichiers)
 *                                  (redFile, writeFile, appendFile, unlink, rename, update)
 * @requires fs : Système de fichiers
 * @requires path : Chemin
 * @requires os : Système d'exploitation
 * @requires util : Utilitaires
 * @requires fs-extra : Système de fichiers étendu
 * @requires fs.promises : Promesses de système de fichiers
 * @requires fs-extra.promises : Promesses de système de fichiers étendu
 * @requires fs-extra/lib/mkdirs : Système de fichiers étendu - Création de répertoires
 * @requires fs-extra/lib/mkdirs/policy : Politique de création de répertoires
 * @requires fs-extra/lib/mkdirs/dir : Répertoire de création de répertoires
 * @requires fs-extra/lib/mkdirs/dir-entries : Entrées de répertoire de création de répertoires
 * @requires fs-extra/lib/mkdirs/dir-entries/dir-entries : Entrées de répertoire de création de répertoires
 * @requires fs-extra/lib/mkdirs/dir-entries/dir-entries.js : Entrées de répertoire de création de répertoires
 */

const http = require('http'); // inclusion du module http
const fs = require('fs'); // inclusion du module système de fichiers

http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
}).listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
}); // création du serveur

