/**
 * Passport Configuration
 */
"use strict";

var mongoose = require('mongoose'),
	LocalStrategy = require('passport-local').Strategy,
	User = mongoose.model('User');

module.exports = function( passport, config ) {

	//Serialize sessions
	passport.serializeUser(function( user, next ) {
		next(null, user.id);
	});

	//Deserialize session
	passport.deserializeUser(function( id, next ) {
		User.findOne({ _id: id })
			.exec( function( err, user ) {
				next(err, user);
			});
	});

	//Use local strategy
	passport.use(new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password'
	},
	function( email, password, next ) {

		User.findOne({ email: email })
			.select('hashed_password salt')
			.exec( function( err, user ) {

				//Error, just return
				if ( err ) return next(err);

				//If no user found.
				if ( !user ) {
					return next(null, false, { message: "Email or password is incorrect." });
				}

				//Can't be authenticated (wrong password?)
				if ( !user.authenticate(password) ) {
					return next(null, false, { message: "Email or password is incorrect." });
				}

				//Logged in, continue.
				return next( null, user );
			});

	}));
};
