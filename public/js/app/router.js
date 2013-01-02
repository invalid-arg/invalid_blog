define(['underscore', 'jquery', 'sammy', 'app/routes', 'ko'],
	function(_, $, Sammy, routes, ko) {
		
		var home = '#/posts';
		var app = new Sammy('#app');
		
		var registerRoutes = function() {
			_.each(routes, function(route) {
				app.get(route.route, function() {
					var params = this.params;
					var container = this.$element(); // $('#app');
					require([route.viewModel], function(viewModel) { 
						container.load(route.template, function() {
							viewModel.activate(params, function() {
								ko.applyBindings(viewModel);	
							});							
						});
					});
				});
			});
		};
		
		var activate = function() {
			registerRoutes();
			app.run(home);
		};
		
		return {
			activate: activate
		};
	});