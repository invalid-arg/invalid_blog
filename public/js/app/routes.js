define([],
	function(vm) {
		var routes = {
			createPost: {
				route: '#/posts/create',
				template: 'admin/posts/create.html',
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