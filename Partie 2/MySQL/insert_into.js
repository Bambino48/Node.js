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
    const sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log("1 record inserted");
    });
});