var express = require('express');
var fs = require('fs');
var app = express();

app.get('/', function(req, res) {
    console.log('Otrzymałem żądanie GET do strony głównej');
    res.send('Hello World');
});

app.listen(3000);

app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});