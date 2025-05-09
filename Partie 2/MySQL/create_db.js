const mysql = require('mysql');

// Créer une connexion
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

// connexion
con.connect((err) =>{
    if(err) throw err;
    console.log("Connected!");
    // Creation de la base de donnée 
    con.query("CREATE DATABASE mydb", (err, result) => {
        if (err) throw err;
        console.log("Database created!");
    });
});