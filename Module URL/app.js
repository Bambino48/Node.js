const url = require('url');
const myURL = new URL('https://example.org:8000/pathname/?search=test#hash');

const q = url.parse(myURL.href, true);

console.log(q.protocol); // Affiche le protocole (https:)
console.log(q.host); // Affiche l'hôte (example.org:8000)
console.log(q.pathname); // Affiche le chemin (/pathname/)
console.log(q.search); // Affiche la chaîne de requête (?search=test)
console.log(q.query); // Affiche l'objet de requête { search: 'test' }
console.log(q.hash); // Affiche le hachage (#hash)
console.log(q.port); // Affiche le port (8000)
console.log(q.hostname); // Affiche le nom d'hôte (example.org)
console.log(q.href); // Affiche l'URL complète (https://example.org:8000/pathname/?search=test#hash)
console.log(q.path); // Affiche le chemin complet (/pathname/?search=test)

const qdata = q.query;

console.log(qdata.search); // Affiche la valeur de la clé 'search' dans l'objet de requête (test)