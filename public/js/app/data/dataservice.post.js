define(['amplify'], function(amplify) {

	amplify.request.define('postAdd', 'ajax', {
      url: '/api/posts',
      dataType: 'json',
      type: 'POST',
			contentType: 'application/json; charset=utf-8' 
  });

	amplify.request.define('posts', 'ajax', {
      url: '/api/posts',
      dataType: 'json',
      type: 'GET',
  });

	amplify.request.define('post', 'ajax', {
      url: '/api/posts/{id}',
      dataType: 'json',
      type: 'GET',
  });

	var addPost = function(callbacks, data) {
		return amplify.request({
			resourceId: 'postAdd',
			data: data,
			success: callbacks.success,
			error: callbacks.error
		});
	};
	
	var getPosts = function(callbacks) {
		return amplify.request({
			resourceId: 'posts',
			success: callbacks.success,
			error: callbacks.error
		});
	};
	
	var getPost = function(callbacks, id) {
		return amplify.request({
			resourceId: 'post',
			data: { id: id },
			success: callbacks.success,
			error: callbacks.error
		});
	};
	
	return {
		addPost: addPost,
		getPosts: getPosts,
		getPost: getPost
	};
});