define('dataservice.post',
	['amplify'],
	function(amplify) {
	
		amplify.request.define('posts', 'ajax', {
			url: '/api/posts',
			dataType: 'json',
			type: 'GET'
		});
		
		var getAll = function(callbacks) {
			return amplify.request({
				resourceId: 'posts',
				success: callbacks.success,
				error: callbacks.error
			});
		};
		
		return {
			getAll: getAll
		};
	});