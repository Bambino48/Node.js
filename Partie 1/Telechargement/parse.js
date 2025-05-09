const http = require('http');
const formidable = require('formidable');

// Analyser le fichier téléchargé
http.createServer((req, res) => {
    if (req.url === '/fileupload') {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            res.write('File uploaded successfully!<br>');
            res.end();
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload" required><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8081, () => {
    console.log('File upload server is running at http://localhost:8081/fileupload');
});

/**
 * Le code ci-dessus crée un serveur HTTP qui écoute sur le port 8081.
 * Lorsqu'un utilisateur accède à l'URL "/fileupload", le serveur utilise la bibliothèque
 * formidable pour analyser le fichier téléchargé. Une fois le fichier analysé,
 * le serveur envoie une réponse indiquant que le fichier a été téléchargé avec succès.
 * Si l'utilisateur accède à la racine du serveur, il reçoit un formulaire HTML
 * permettant de télécharger un fichier. Le formulaire utilise la méthode POST et
 * l'encodage multipart/form-data pour permettre le téléchargement de fichiers.
 * Lorsque l'utilisateur soumet le formulaire, le fichier est envoyé au serveur
 * pour être analysé par formidable.
*/