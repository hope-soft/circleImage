var Circle = require('./models/circle');

module.exports = function(app) {

	app.get('/api/circle', function(req, res) {

		Circle.find(function(err, Circles) {

			if (err)
				res.send(err)

			res.json(Circles); 
		});
	});

	
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
};