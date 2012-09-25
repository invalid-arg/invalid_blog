var restify = require('restify');
var connect = require('connect');
var posts = require('./api/posts');

var server = restify.createServer();
server.use(connect.logger());
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

// posts 
//server.get('/api/posts', posts.all)

var static_docs_server = connect.static(__dirname + '/views');
server.get(/\/\/*/, function(req, res, next) {
	return static_docs_server(req, res, next);
});

var port = process.env.port || 8080;
server.listen(port, function() {
	console.log('%s listening at %s', server.name, server.url);
});
