var LocalStrategy   = require('passport-local').Strategy;
var User = require('../models/user');
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport){
    passport.use('admin', new LocalStrategy({
        passReqToCallback : true
    },
    function(req, done) {
        findAll = function(){
            var users = {};
            User.find({}, function(err, user) {
                users[user._id] = user;
                console.log("Here are the users:", users);
            });
            return done;
        }
    }
    ))
}