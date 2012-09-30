var development = {
	connection: 'localhost:27017/invalid_blog'
};

var production = {
	connection: ''
};

exports.Config = global.process.env.NODE_ENV === 'production' ? production : development;
