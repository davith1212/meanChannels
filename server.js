var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// var angularMaterialize = require('angular-materialize');
var app = express();

app.use(express.static(path.join(__dirname, './clients')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
var routes_setter = require('./server/config/routes.js');
routes_setter(app);


app.listen(3333, function() {
	console.log('listening on port 3333');
});