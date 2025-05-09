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
    // interroger la db
    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Result: " + result);
    });
});