const formidable = require('formidable');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Crée un serveur HTTP
http.createServer((req, res) => {
    
    if (req.url === '/fileupload' && req.method.toLowerCase() === 'post') {
        // Initialisation de Formidable
        const form = new formidable.IncomingForm();
        
        // Spécifie le dossier de destination
        form.uploadDir = path.join(__dirname, '/uploads');
        form.keepExtensions = true; // Garde l'extension du fichier
        
        // Vérifie si le dossier 'uploads' existe, sinon le crée
        if (!fs.existsSync(form.uploadDir)) {
            fs.mkdirSync(form.uploadDir);
        }
        
        // Traite le fichier uploadé
        form.parse(req, (err, fields, files) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Erreur lors du téléchargement');
                return;
            }
            
            const oldPath = files.filetoupload.filepath;
            const newPath = path.join(form.uploadDir, files.filetoupload.originalFilename);

            // Renomme et déplace le fichier
            fs.rename(oldPath, newPath, (err) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Erreur lors du déplacement du fichier');
                    return;
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('Fichier téléchargé avec succès !<br>');
                res.write(`<a href="/">Retour</a>`);
                res.end();
            });
        });

    } else {
        // Affichage du formulaire
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="/fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload" required><br>');
        res.write('<input type="submit" value="Télécharger">');
        res.write('</form>');
        res.end();
    }
}).listen(8080, () => {
    console.log('Server is running at http://localhost:8080/');
});


/**
 * Le code ci-dessus crée un serveur HTTP qui écoute sur le port 8080.
 * Lorsqu'un utilisateur accède à la racine du serveur, il reçoit un formulaire HTML
 * permettant de télécharger un fichier. Le formulaire utilise la méthode POST et
 * l'encodage multipart/form-data pour permettre le téléchargement de fichiers.
 * Lorsque l'utilisateur soumet le formulaire, le fichier est envoyé au serveur.
 * Le serveur peut ensuite traiter le fichier téléchargé en utilisant la bibliothèque
 * formidable.
 */

