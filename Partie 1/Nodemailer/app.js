const nodemailer = require('nodemailer');

// Envoyer un email 
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ibamba417@gmail.com',
        pass: 'Ibrahim1991'
    }
});

const mailOptions = {
    from: 'ibamba417@gmail.com',
    to: 'ibamba366@gmail.com',
    subject: 'Test envoyer un email avec Node.js',
    text: 'Salut je fais un test !'
};

transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
        console.log(error);
    } else {
        console.log('Emai sent: ' + info.response);
    }
});