var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

app.listen(3003, function() {
    console.log('on 3003');
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});