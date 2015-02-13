var express = require('express');
var http = require('http');
var lessMiddleware = require('less-middleware');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

// development only
if ('development' == app.get('env')) {
	app.use(lessMiddleware({
		dest: "/css",
		src: "/css/less",
		prefix: "css",
		root: __dirname,
		force: true,
		compress: true,
		yuicompress: true,
		debug: true 
	}));
  	app.use(express.errorHandler());
}

app.use(express.static(__dirname));

app.get('/', function (req, res) {
	res.sendfile(__dirname + '/index.html');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
