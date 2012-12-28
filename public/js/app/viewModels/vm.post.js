define(['ko'],
	function(ko) {
		var post = ko.observable('test');
		
		return {
			post: post
		};
	});
	