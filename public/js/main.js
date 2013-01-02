require.config({
	paths: {
		'jquery': ['http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.3.min', 'lib/jquery.min'],
		'amplify': ['//cdnjs.cloudflare.com/ajax/libs/amplifyjs/1.1.0/amplify.min', 'lib/amplify.min'],
		'sammy': ['//cdnjs.cloudflare.com/ajax/libs/sammy.js/0.7.2/sammy.min', 'lib/sammy.min'],
		'underscore': ['//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.3/underscore-min', 'lib/underscore.min'],
		'ko': ['http://ajax.aspnetcdn.com/ajax/knockout/knockout-2.2.0', 'lib/knockout'],
		'marked': 'lib/marked',
		'bootstrap': 'lib/bootstrap.min',
		'toastr': 'lib/toastr'
  },
	shim: {
		'sammy': {
			deps: ['jquery'],
			exports: 'Sammy'
		},
		'underscore': {
			exports: '_'
		},
		'app/ko.bindings' : {
			deps: ['jquery', 'ko']
		},
		'marked': {
			exports: 'marked'
		},
		'amplify' : {
			exports: 'amplify'
		}
	}
}); 

// load up extensions.
require(['app/ko.bindings', 'app/extensions']);
	
require(['app/router', 'jquery'], function(router, $) {
	var activate = function() { 
		router.activate();
	};
		
	$(document).ready(function() {
		activate();
	});
});
