var express = require('express');
var path = require('path');

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, '../dist')))

app.get('/', function(req, res, next) {
  res.render('index');
});

app.listen(process.env.PORT || 3000);

module.exports = app;
