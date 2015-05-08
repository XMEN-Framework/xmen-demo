/**
* User routes
*/
"use strict";

var multipart = require('connect-multiparty');

module.exports = function( app, passport, auth ) {

    var users = require('../controllers/users');

    app.post('/login', passport.authenticate('local', {
        failureRedirect: '/login',
        failureFlash: 'Invalid email or password.'
    }), users.login);

    app.post('/register', users.register);

    app.get('/logout', users.logout);
};
