const mysql = require('mysql');

// Créer une connexion
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

// connexion
con.connect((err) =>{
// sourcery skip: use-braces
    if(err) throw err;
    console.log("Connected!");
    // Selectionner une colonne
    con.query("SELECT name, address FROM customers", (err, result, fields) => {
        if (err) throw err;
        console.log(fields);
    });
});