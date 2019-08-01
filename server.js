var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.use('/store', communicate, authorize, checkPermisson, getStore);

function communicate(req, res, next) {
    console.log('Jestem pośrednikiem przy żądaniu do /store');
    next();
}

function authorize(req, res, next) {
    console.log('Autoryzacja użytkownika');
    next();
}

function checkPermisson(req, res, next) {
    console.log('Sprawdzanie uprawnień');
    next();
}

function getStore(req, res) {
    res.send('To jest sklep');
}

var server = app.listen(3000, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});




