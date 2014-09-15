var mongoose = require('mongoose');

module.exports = mongoose.model('Circle', {
	src : {type : String, default: ''},
	title : {type : String, default: ''}
});