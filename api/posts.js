var posts = new function() {
	var Mongolian = require('mongolian'),
		config = require('./../config').Config,
		db = new Mongolian(config.connection),
		uuid = require('node-uuid'),
		postsCollection = db.collection("posts");
	
	var all = function(req, res, next) {
		postsCollection.find({}).toArray(function (err, posts) {
			debugger;
			res.send(posts);
			console.log(posts);
			return next();
		});
	};
	
	var single = function(req, res, next) {
		var id = req.params.id;
		if (id) {
			postsCollection.findOne({ _id: id }, function(err, post) {
				console.log(post);

				if (post) {
					res.send(post);	
				} else {
					res.send(404);
				};
				
				return next();
			});
		} else {
			throw new Error('id not supplied');
		}
	};
	
	var create = function (req, res, next) {
		debugger;
		postsCollection.insert({
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
	};
	
	return {
		all: all,
		single: single,
		create: create
	}
}

exports.Posts = posts;