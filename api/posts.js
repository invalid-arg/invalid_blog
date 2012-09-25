var storage = require('bluesky').storage({account: 'invalidargument', key: '/Prc2tpEN567252lym1i8LmzEu7siXoyF221ZyuvVmXWKYs38pKe0yYk159LVwdRh/hjPmbANIvH8mOhZBLL1A=='})

exports.all = function(req, res, next) {
	var table = storage.table('test');


	storage.listTables().on('end', function(err, count) {
	  res.send(count);
	});


};