'use strict';

var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/client'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/index.html');
});

app.get('/beta', function(req, res) {
  res.sendFile(__dirname + '/client/beta.html');
});

app.get('*', function(req, res) {
  res.redirect('/');
});

app.listen(3000);