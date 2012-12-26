var Mongolian = require('mongolian');
var db = new Mongolian('localhost:27017/invalid_arg');
	var posts = db.collection("posts");
	var allPosts = '';
	posts.find({}).toArray(function (err, posts) {
//		allPosts += post;
		console.log(posts)
	});
//	console.log(allPosts);