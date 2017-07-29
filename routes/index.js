var express = require('express');
var router = express.Router();
var User = require('../models/user');

var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/');
}

var isAdmin = function (req, res, next) {
	if (req.user.username != 'c')
		res.redirect('/notadmin');
	else
		return next();
}

module.exports = function(passport){

	/* GET login page. */
	router.get('/', function(req, res) {
    	// Display the Login page with any flash message, if any
		res.render('index', { message: req.flash('message') });
	});

	/* Handle Login POST */
	router.post('/login', passport.authenticate('login', {
		successRedirect: '/test',
		failureRedirect: '/',
		failureFlash : true  
	}));

	/* GET Registration Page */
	router.get('/signup', function(req, res){
		res.render('register',{message: req.flash('message')});
	});

	/* Handle Registration POST */
	router.post('/signup', passport.authenticate('signup', {
		successRedirect: '/test',
		failureRedirect: '/signup',
		failureFlash : true  
	}));

	/* GET Test Page */
	router.get('/test', isAuthenticated, function(req, res){
		res.render('test', { user: req.user });
	});

	/* Handle Logout */
	router.get('/signout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	router.get('/admin', isAuthenticated, isAdmin, function (req, res) {
	    User.find({}).exec(function(err, users) {   
        // if (err) throw err;
	        res.render('admin.ejs', { "users": users });
	    })
	});

	router.get('/notadmin', isAuthenticated, function(req, res){
		res.render('notadmin');
	});

	router.get('/delete/:id?', isAuthenticated, function(req,res){
		var db = req.db;
		var uid = req.params.id;
		console.log("id is ", uid );
		User.remove({ _id: uid}).exec(function(err, users) {
			if (err) throw err;
		})
		res.render('deleteok');

	});

	return router;
}