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
    if(err) throw err;
    console.log("Connected!");
    // Creation de table
    const sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Table altered !");
    });
});