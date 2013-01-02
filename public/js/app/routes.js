define([],
	function(vm) {
		var routes = {
			createPost: {
				route: '#/posts/details',
				template: 'admin/posts/details.html',
				viewModel: 'app/viewModels/vm.post'
			},
			editPost: {
				route: '#/posts/details/:id',
				template: 'admin/posts/details.html',
				viewModel: 'app/viewModels/vm.post'
			},
			listPost: {
				route: '#/posts',
				template: 'admin/posts/index.html',
				viewModel: 'app/viewModels/vm.posts'
			}
		};
		
		return routes;
	});