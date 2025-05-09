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
    // Creation de table
    const sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
        con.query(sql, (err, result) => {
        if (err) throw err;
        console.log("1 record inserted, ID: " + result.insertId);
    });
});