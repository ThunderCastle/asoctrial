const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: "/Users/thad/Database/futbxl.db"
    }

});


let port = 8888;
let app = express();
app.use(express.static('client'));


app.get('/players', function(req, res) {
    knex.select('*').from('*').asCallback(function(err, values) {
        res.json(values);
    });
})

app.get('/findPlayersByName', function(req, res) {
var searchterm = req.query.name;
    knex.select('first_name', 'last_name').from('Players').where('first_name', searchterm).asCallback(function(err, values) {
        res.json(values);
    });
})

app.listen(port);
