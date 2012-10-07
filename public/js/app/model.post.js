define('model.post',
	['knockout'],
	function(ko) {
		var PostBrief = function() {
			this.id = ko.observable();
			this.title = ko.observable();
			this.created = ko.observable();
			this.createdBy = ko.observable();
			this.body = ko.observable();
		};
		
		var mapper = function(json) {
			var item = new PostBrief();
			item.id(json.id)
			.title(json.title)
			.created(json.created)
			.createdBy(json.createdBy)
			.body(json.body);
			
			return item;
		};
		
		return {
			model: PostBrief,
			mapper: mapper
		};
	});