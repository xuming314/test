var express = require('express');
var dbModel=require('./dbModel');

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});


dbModel.init(function(err, pool) {
  if (err) return console.log('db error.');
  app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
  });
});