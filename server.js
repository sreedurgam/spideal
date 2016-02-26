var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var server = require('http').createServer(app);
amazon = require('amazon-product-api');
var bodyParser = require('body-parser');
var movies = [];

app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');

require('./services/amazonService.js')(app);

server.listen(port);
console.log('Server running at http://localhost:8080');




