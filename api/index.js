const express = require('express');
var mysql      = require('mysql');
var db = mysql.createConnection({
  host     : '184.18.7.10',
  user     : 'root',
  password : '123'
});

// Constants
const PORT = 5000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    db.connect();

    db.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
        console.log('The solution is: ', rows[0].solution);
    });

    db.end();

    res.send('Hello World!!!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);