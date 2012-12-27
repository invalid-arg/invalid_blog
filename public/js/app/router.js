define(['underscore', 'jquery', 'sammy', 'app/routes'],
	function(_, $, Sammy, routes) {
		
		var
		
		var activate = function() {
			var app = new Sammy();
			
			_.each(routes, function(route) {
				app.get(route.route, function() {
					require([route.viewModel], function(viewModel) { 
						$('#app').load(route.template);
					});
				});
			});
			
			app.run();
		};
		
		return {
			activate: activate
		};
	});