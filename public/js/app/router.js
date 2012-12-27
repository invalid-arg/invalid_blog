define(['underscore', 'jquery', 'sammy', 'app/routes'],
	function(_, $, Sammy, routes) {
		
		var home = '#/posts';
		var app = new Sammy('#app');
		
		var registerRoutes = function() {
			_.each(routes, function(route) {
				app.get(route.route, function() {
					var container = this.$element(); // $('#app');
					require([route.viewModel], function(viewModel) { 
						container.load(route.template);
					});
				});
			});
		}
		
		var activate = function() {
			registerRoutes();
			app.run(home);
		};
		
		return {
			activate: activate
		};
	});