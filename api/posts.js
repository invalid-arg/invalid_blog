var posts = new function() {
	var Mongolian = require('mongolian'),
		config = require('./../config').Config,
		db = new Mongolian(config.connection),
		uuid = require('node-uuid'),
		posts = db.collection("posts");
	
	var all = function(req, res, next) {
		posts.find({}).toArray(function (err, posts) {
			res.send(posts);
			console.log(posts);
			return next();
		});
	};
	
	var create = function (req, res, next) {
		posts.insert({
			_id: uuid.v4(),
		    pageUrl: req.body.pageUrl,
		    title: req.body.title,
		    created: req.body.created,
			createdBy: req.body.createdBy,
		    body: req.body.body
		}, function(err, post) {
			res.send(201, post);
			return next();	
		});
	}
	
	return {
		all: all,
		create: create
	}
}

exports.Posts = posts;