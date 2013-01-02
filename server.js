var restify = require('restify');
var connect = require('connect');
var posts = require('./api/posts').Posts;

var server = restify.createServer();
server.use(connect.logger());
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser({ mapParams: false }));

// posts 
server.get('/api/posts', posts.all)
server.get('/api/posts/:id', posts.single)
server.post('/api/posts', posts.create)


var static_docs_server = connect.static(__dirname + '/public');
server.get(/\/\/*/, function(req, res, next) {
	return static_docs_server(req, res, next);
});

var port = process.env.port || 8080;
server.listen(port, function() {
	console.log('%s listening at %s', server.name, server.url);
});
