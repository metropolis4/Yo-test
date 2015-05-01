var express = require('express'),
	bodyParser = require('body-parser'),
	indexController = require('./controllers/index.js');
	less = require('less')
	lessScript = require('./les/main.less')

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
// less.render(lessScript)
// 	.then(function())

var server = app.listen(9465, function() {
	console.log('Express server listening on port ' + server.address().port);
});
