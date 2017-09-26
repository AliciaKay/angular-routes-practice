var express = require('express');
var app = express();
var path = require('path');

var serverThings = ['apron', 'pen', 'notebook', 'virus', 'turtle'];

app.use(express.static('public'));

app.get('/serverThings', function(req, res) {
    res.send(serverThings);
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3003, function() {
    console.log('on 3003');
});