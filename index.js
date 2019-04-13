var express = require('express');
var app = express();
var recipe = require('./recipe.js')

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index', recipe);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
