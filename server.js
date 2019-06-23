var express = require('express');
var app = express();
var fs = require('fs');
app.set('view engine', 'pug');
app.set('views','./views');
var data;


app.get('/login', function(req, res){
    res.render('login', {
        url: "www.google.com",
    });
});

app.get('/nextpage', function(req, res) {
    res.render('nextpage');
});

app.post('/nextpage/:id', function(req, res){
    
    fs.writeFile('./log.json', data, function(err) {
        if (err) throw err;
        data = res.json({login: req.query.login});
        res.send(data);
    });
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});



