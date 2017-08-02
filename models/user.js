
var mongoose = require('mongoose');
var conn      = mongoose.createConnection('mongodb://heroku_r7mfmfz6:1i2jsafc0nm2d9uelq9urbju32@ds129023.mlab.com:29023/heroku_r7mfmfz6');

module.exports = conn.model('User',{
	id: String,
	username: String,
	password: String,
	email: String,
	firstName: String,
	lastName: String
});