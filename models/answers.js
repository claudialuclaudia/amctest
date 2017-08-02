
var mongoose = require('mongoose');
var conn2     = mongoose.createConnection('mongodb://heroku_772msnjn:ohrcgstaat56t7aemn24on76q6@ds129023.mlab.com:29023/heroku_772msnjn');

module.exports = conn2.model('answers',{
        answers: []
});