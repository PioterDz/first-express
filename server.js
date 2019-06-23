var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
var stringifyFile;

app.use(bodyParser.json());

app.get('/getNote', function(req, res) {
    console.log("Zapytanie " + req.url + " odebrane.");

    fs.readFile('./test.json', 'utf8', function(err, data) {
        if (err) throw err;
        stringifyFile = data
        res.send(data);
    });

});

app.post('/updateNote/:note', function(req, res) {

    fs.writeFile('./test.json', stringifyFile, function(err) {
        if (err) throw err;
        res.send(stringifyFile + req.params.note);
    });

});



app.listen(3000);

