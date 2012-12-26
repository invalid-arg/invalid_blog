  define('amplify', ['lib/amplify.min'], function () { return this.amplify; });
	define('jquery', ['lib/jquery.min'], function () { return this.jQuery; });
	define('sammy', ['lib/sammy.min'], function (Sammy) { return Sammy; });
	define('underscore', ['lib/underscore.min'], function () { return this._; });
	define('ko', ['lib/knockout'], function (ko) { return ko; });
	
	
	
  require(['app/router', 'jquery'], function(router, $) {
		var activate = function() { 
			router.activate();
		};
		
		$(document).ready(function() {
			activate();
		});
	});
