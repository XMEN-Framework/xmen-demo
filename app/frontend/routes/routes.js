/**
* Frontend routes
*/
"use strict";

module.exports = function( app, passport, auth ) {

    var frontend = require('../controllers/frontend');

    //Logged in user routes.
    app.get('', frontend.home);
    app.get('/register', frontend.register);
    app.get('/login', frontend.login);

    app.get('/profile', auth.requiresLogin, frontend.profile);
};
