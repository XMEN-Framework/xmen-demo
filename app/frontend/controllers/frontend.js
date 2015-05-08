/**
 * Frontend Controller
 */
"use strict";


/**
 * Render homepage.
 */
exports.home = function( req, res ) {
    res.render('home');
};

exports.login = function( req, res ) {
    res.render('login', {
        flash: req.flash()
    });
};

exports.register = function( req, res ) {
    res.render('register');
};

exports.profile = function( req, res ) {
    //req.user
    var user = {
        _id: req.user._id.toString(),
        first_name: req.user.first_name,
        last_name: req.user.last_name,
        email: req.user.email
    };

    res.render('profile', {
        user: user
    });
};
