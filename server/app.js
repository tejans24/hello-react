var express = require('express');
var path = require('path');

var app = express();
app.set('views', path.join(__dirname, '../client/jsx'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.static(path.join(__dirname, '../dist')))

app.get('/', function(req, res, next) {
  res.render('index');
});

app.listen(process.env.PORT || 3000);

module.exports = app;
