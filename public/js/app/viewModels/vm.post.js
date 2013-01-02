define(['ko', 'app/data/dataservice.post', 'toastr'],
	function(ko, dataServicePost, toastr) {
		var post = {
			title: ko.observable(''),
			body: ko.observable('')
		};
		post.permaLink =  ko.computed(function() {
			return post.title().toPermaLink();
		});
		
		var activate = function(params, callback) {
			if (params && params.id) {
				dataServicePost.getPost({
					success: function(data) {
						toastr.success(data._id);
					},
					error: function() {
						toastr.error('Shit gone wrong');
					}
				},params.id)
			};
			
			console.log('activate called');
			callback();
		};
		
		var create = function() {
			var postJson = ko.toJSON(post);
			dataServicePost.addPost({ 
				success: function() {
					toastr.success('Blog post has been saved');
				}, 
				error: function() {
					toastr.error('Shit gone wrong');
				}
			}, postJson);
		}
		
		return {
			post: post,
			activate: activate,
			create: create
		};
	});
	