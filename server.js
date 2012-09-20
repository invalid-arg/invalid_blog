var restify = require('restify');
var connect = require('connect');


function respond(req, res, next) {
	res.send('hello ' + req.params.name);
}

var server = restify.createServer();
server.use(connect.logger());
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

var static_docs_server = connect.static(__dirname + '/views');
server.get(/\/\/*/, function(req, res, next) {
	return static_docs_server(req, res, next);
});

var port = process.env.port || 1337;
server.listen(port, function() {
	console.log('%s listening at %s', server.name, server.url);
});
