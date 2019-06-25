var express = require('express');
var app = express();
var fs = require('fs');
app.set('view engine', 'pug');
app.set('views','./views');

app.get('/login', function(req, res){
    res.render('login', {
        url: "www.google.com",
    });
});

app.get('/nextpage', function(req, res) {
    res.render('nextpage', {
        user: req.query.login,
        url: 'www.google.com'
    });
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});



