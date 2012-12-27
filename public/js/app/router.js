define(['underscore', 'jquery', 'sammy', 'app/routes'],
	function(_, $, Sammy, routes) {
		
		var home = '#/posts';
		var app = new Sammy();
		
		var registerRoutes = function() {
			_.each(routes, function(route) {
				app.get(route.route, function() {
					require([route.viewModel], function(viewModel) { 
						$('#app').load(route.template);
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