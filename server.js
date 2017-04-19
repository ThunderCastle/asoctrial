const express = require('express');
const bodyParser = require('body-parser');
const compact = require('lodash.compact');
const path = require('path');
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: "/Users/thad/Database/futbxl.db"
    }

});


let port = 8888;
let app = express();



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

app.get('/api/search', function(req, res) {
    var searchArray = compact(req.query.searchString.split(' '));
    var searchResults = [];
    console.log(searchArray);
    var query = knex.select('*').from('Players').leftJoin('Teams', 'Players.teamID', 'Teams.ID')
        .where('first_name', 'like', `%${searchArray[0]}%`)
        .orWhere('last_name', 'like', `%${searchArray[0]}%`);
    if (searchArray.length > 1) {
        for (var i = 1; i < searchArray.length; i++) {
            query.orWhere('last_name', 'like', `%${searchArray[i]}%`)
                .orWhere('first_name', 'like', `%${searchArray[i]}%`);
        }
    }

    query.asCallback(function(err, values) {
        var result = parseResults(values);
        searchResults.concat(result);
          
        res.status(200).json(result);

    });
    // res.status(200).json(searchResults);
});

function parseResults(values) {
    return values.map(function(value) {
        return {
            picture: value.picture_filepath,
            fullname: value.first_name + ' ' + value.last_name,
            teamname: value.team_name
        }
    })
}
app.use(express.static(path.resolve(__dirname, 'client')));
app.listen(port);
